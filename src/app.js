import { add_buttons } from "./chart_buttons"
import './app.css';
import { build_plot } from "./bar_plot"
import { createApolloFetch } from 'apollo-fetch';



var metrics_values={};

function load_bars_visualization (){ 

  let charts = document.getElementsByClassName("benchmarkingChart_bars");
  
  let i = 0;
  let dataId;
  let y;
  let divid;
  
  // append ids to chart/s and make d3 plot
  i = 0
  for(y of charts){
    // define base url - production or development
    //check for mode by default it is production if no param is given
    var mode = $(y).data("mode") ? "dev-openebench" : "openebench"
    let base_url = "https://" + mode + ".bsc.es/";

    // get benchmarking event id
    dataId = y.getAttribute('data-id');

    // get metric id
    var metric_y = y.getAttribute('metric_y');
    //set chart id
    divid = (dataId+i).replace(":","_");
    y.id=divid;
    
    let url = base_url + "sciapi/graphql";
        
    let json_query = `query getDatasets($challenge_id: String!){
                        getDatasets(datasetFilters:{challenge_id: $challenge_id, type:"assessment"}) {
                            _id
                            community_ids
                            datalink{
                                inline_data
                            }
                            depends_on{
                                tool_id
                                metrics_id
                            }
                        }
                      }`

    get_data(url, json_query ,dataId, divid, metric_y);

  i++;
  };
};

function get_data(url, json_query ,dataId, divid, metric_y){

  try {

      const fetch = createApolloFetch({
        uri: url,
      });

      let vars = { challenge_id: dataId };

      fetch({
        query: json_query,
        variables: vars,
      }).then(res => {
          let result = res.data.getDatasets;
          if (result.length == 0){

            // document.getElementById(divid + "_button").remove();
      
            var para = document.createElement("td");
            para.id = "no_benchmark_data"
            var err_txt = document.createTextNode("No data available for the selected challenge: " + dataId);
            para.appendChild(err_txt);
            var element = document.getElementById(divid);
            element.appendChild(para);
      
        } else {

          // get the names of the tools that are present in the community
          const fetchData = () => fetch({
            query: `query getTools($community_id: String!){
                        getTools(toolFilters:{community_id: $community_id}) {
                            _id
                            name
                        }
                        getMetrics {
                          _id
                          title
                          representation_hints
                        }
                    }`,
            variables: {community_id: result[0].community_ids[0]},
          });

          fetchData().then(response => { 
            
            let tool_list = response.data.getTools;
            let metrics_list = response.data.getMetrics;
            // iterate over the list of tools to generate a dictionary
            let tool_names = {};
            tool_list.forEach( function(tool) {
                tool_names[tool._id] = tool.name
            
            });

            // iterate over the list of metrics to generate a dictionary
            let metric_name;

            metrics_list.forEach( function(element) {
              if (element._id == metric_y){
                metric_name = element.title
              } 
                            
            });
            metric_name = "F-Measure"
            join_all_json(result, divid, tool_names, metric_name);

          });
                              
        };
      });

    }
    catch (err) {
      console.log(`Invalid Url Error: ${err.stack} `);
    }

};

function join_all_json(result, divid, tool_names, metric_name){

  var data =[]
  result.forEach( function(dataset) {

    data.push({ 
      "toolname": tool_names[dataset.depends_on.tool_id],
      "metric_value": parseFloat(dataset.datalink.inline_data.value)
    });

  });

  // sort data by participant name
  data = sortByKey(data, "toolname");
  metrics_values[divid] = data;
  
  // add plot limits
  var margin = {top: 40, right: 30, bottom: 120, left: 60},
  width = Math.round($(window).width()* 0.70226) - margin.left - margin.right,
  height = Math.round($(window).height()* 0.8888) - margin.top - margin.bottom;

  add_buttons (divid, metric_name, width, margin, height);
  build_plot(data, divid, width, margin, height, metric_name);

};

function sortByKey(array, key) {
  return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0)) * 1;
  });
};

function type(d) {
d.wpc_index = +d.wpc_index;
return d;
}

export {
  load_bars_visualization,
  metrics_values
};

load_bars_visualization();