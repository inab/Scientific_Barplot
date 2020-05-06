import { sort_and_classify } from "./classify_bars"
import { build_plot } from "./bar_plot"
import { metrics_values } from "./app"

export function add_buttons (divid, metric_name, width, margin, height){

    // add button
    d3.select("#" + divid).append("input")
    .attr("type","button")
    .attr("class","classificator_button")
    .attr("id", divid + "_button")
    .attr("value", "Sort & Classify Results" )
    .on('click', function(d) { compute_classification( divid, width, margin, height, metric_name);})
  
    d3.select('#'+divid).append("div").attr("class", "flex-container").attr("id", divid + "flex-container");
    let table_id = divid + "_table";
    var input = $('<br><br><table id="'+table_id+ '"class="benchmarkingTable_bars"></table>');
    $("#" + divid + "flex-container").append(input);
  
  
}

function compute_classification( divid, width, margin, height, metric_name){

    var table = document.getElementById(divid + "_table");
    // every time a new classification is compute the previous results table is deleted (if it exists)
    if (table != null) {
      table.innerHTML = '';
    };
  
    // delete previous plot and build new one
    d3.select('#'+ divid + '_svg').remove();
  
    // check if table is visible; if it is, build plot with unsorted data
    var style = getComputedStyle(table);
    
    if ( style.display == "block") {
  
      //change the text in the classification button
      d3.select("#" + divid + "_button").attr("value", "Sort & Classify Results");
      // change table display
      table.style.display = "none"; 
      build_plot(metrics_values[divid], divid, width, margin, height, metric_name);
  
    } else { // if not, sort the data and build plot with it
  
      //change the text in the classification button
      d3.select("#" + divid + "_button").attr("value", "Get Back to Raw Results");
      sort_and_classify(metrics_values[divid], divid, width, margin, height, metric_name);
    }
  
  };