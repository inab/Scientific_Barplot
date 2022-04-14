import { add_buttons } from "./chart_buttons";
import "./app.css";
import { build_plot } from "./bar_plot";
import { createApolloFetch } from "apollo-fetch";
import * as d3 from "d3";
import * as JQuery from "jquery";
const $ = JQuery.default;
window.d3 = d3;

var metrics_values = {};

function load_bars_visualization() {
  let charts = document.getElementsByClassName("benchmarkingChart_bars");

  let i = 0;
  let dataId;
  let y;
  let divid;

  // append ids to chart/s and make d3 plot
  i = 0;
  for (y of charts) {
    // ********* DEPRECATED ******
    // Please supply data-api-url parameter
    // ***************************
    // define base url - production or development --- DEPCRECATED
    //check for mode by default it is production if no param is given
    var mode = $(y).data("mode") ? $(y).data("mode") : "openebench";
    let base_url = "https://" + mode + ".bsc.es/";
    // **************************

    const api_url = $(y).data("api-url");
    let url = api_url ? api_url : base_url + "sciapi/graphql"; //downward compatibility

    // get benchmarking event id
    dataId = y.getAttribute("data-id");

    // get metric id
    var metric_y = y.getAttribute("metric_y");
    //set chart id
    divid = (dataId + i).replace(":", "_");
    y.id = divid;

    let json_query = `query getDatasets($dataset_id: String!){
                        getDatasets(datasetFilters:{id: $dataset_id, type:"aggregation"}) {
                            _id
                            community_ids
                            datalink{
                                inline_data
                            }
                        }
                      }`;

    get_data(url, json_query, dataId, divid, metric_y);

    i++;
  }
}

function get_data(url, json_query, dataId, divid, metric_y) {
  try {
    const fetch = createApolloFetch({
      uri: url,
    });

    let vars = { dataset_id: dataId };

    fetch({
      query: json_query,
      variables: vars,
    }).then((res) => {
      let result = res.data.getDatasets;
      if (result.length == 0) {
        // document.getElementById(divid + "_button").remove();

        var para = document.createElement("td");
        para.id = "no_benchmark_data";
        var err_txt = document.createTextNode(
          "No data available for the selected challenge: " + dataId
        );
        para.appendChild(err_txt);
        var element = document.getElementById(divid);
        element.appendChild(para);
      } else {
        // get the names of the tools that are present in the community
        const fetchData = () =>
          fetch({
            query: `query getMetrics{
                        getMetrics {
                          _id
                          title
                          representation_hints
                        }
                    }`,
            variables: { community_id: result[0].community_ids[0] },
          });

        fetchData().then((response) => {
          let metrics_list = response.data.getMetrics;

          // parsing GraphQL wrapped JSON Object
          try {
            result[0].datalink.inline_data = JSON.parse(
              result[0].datalink.inline_data
            );
          } catch (err) {
            console.warn(err);
          }

          // iterate over the list of metrics to generate a dictionary
          let metric_name;
          if (
            result[0].datalink.inline_data.visualization.metric.startsWith(
              "OEBM"
            ) == true
          ) {
            metrics_list.forEach(function (element) {
              if (element._id == metric_y) {
                metric_name = element.title;
              }
            });
          } else {
            metric_name = result[0].datalink.inline_data.visualization.metric;
          }

          join_all_json(result, divid, metric_name);
        });
      }
    });
  } catch (err) {
    console.log(`Invalid Url Error: ${err.stack} `);
  }
}

function join_all_json(result, divid, metric_name) {
  var data = [];
  result[0].datalink.inline_data.challenge_participants.forEach(function (
    element
  ) {
    data.push({
      toolname: element.tool_id,
      metric_value: element.metric_value,
    });
  });

  // sort data by participant name
  data = sortByKey(data, "toolname");
  metrics_values[divid] = data;
  // add plot limits
  var margin = { top: 40, right: 30, bottom: 180, left: 60 },
    width =
      Math.round($(window).width() * 0.70226) - margin.left - margin.right,
    height =
      Math.round($(window).height() * 0.8888) - margin.top - margin.bottom;

  var min_y = 0;
  add_buttons(data, divid, width, margin, height, metric_name, min_y);
  build_plot(data, divid, width, margin, height, metric_name, min_y);
}

function sortByKey(array, key) {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return (x < y ? -1 : x > y ? 1 : 0) * 1;
  });
}

function type(d) {
  d.wpc_index = +d.wpc_index;
  return d;
}

export { load_bars_visualization, metrics_values };

load_bars_visualization();
