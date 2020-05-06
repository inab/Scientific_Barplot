import { sort_and_classify } from "./classify_bars"
import { build_plot } from "./bar_plot"
import { metrics_values } from "./app"
import html2canvas from 'html2canvas'
import * as jsPDF from 'jspdf'
import d3_save_svg from 'd3-save-svg';

export function add_buttons (divid, metric_name, width, margin, height){

    // add div which will hold all the buttons for user actions
    d3.select('#'+divid).append("div")
    .attr("id", divid + "_buttons_container")
    .attr("class", "buttons_container")

    // add classification button
    d3.select("#" + divid + "_buttons_container").append("input")
    .attr("type","button")
    .attr("class","classificator_button")
    .attr("id", divid + "_button")
    .attr("value", "Sort & Classify Results" )
    .on('click', function(d) { compute_classification( divid, width, margin, height, metric_name);})
    
    // add options button to download chart in pdf or png format
    let select_list = d3.select("#" + divid + "_buttons_container").append("div").attr("class","download_div").append("form").append("select")
    .attr("class","download_button")
    .attr("id",divid + "_download_button")
    .on('change', function(d) {
      download_image(this.options[this.selectedIndex].id, divid);
      let select_list = document.getElementById(divid + "_download_button");
      select_list.value = "Download";

    })
    .append("optgroup")
    .attr("label", "Select a format: ")
    
    
    select_list.append("option")
    .attr("value", "Download")
    .attr("disabled","selected")
    .text("Download")
    .attr("style", "display:none")

    select_list.append("option")
    .attr("class", "selection_option")
    .attr("id", "png")
    .attr("title", "Download plot as PNG")
    .attr("data-toggle", "list_tooltip")
    .attr("data-container", "#tooltip_container") 
    .text("PNG")
    select_list.append("option")
    .attr("class", "selection_option")
    .attr("id", "pdf")
    .attr("title", "Download plot as PDF")
    .attr("data-toggle", "list_tooltip")
    .attr("data-container", "#tooltip_container") 
    .text("PDF")
    select_list.append("option")
    .attr("class", "selection_option")
    .attr("id", "svg")
    .attr("title", "Download plot as SVG")
    .attr("data-toggle", "list_tooltip")
    .attr("data-container", "#tooltip_container") 
    .text("SVG (only plot)")
    
    d3.select('#'+divid).append("div").attr("class", "flex-container").attr("id", divid + "flex-container");
    let table_id = divid + "_table";
    var input = $('<br><br><table id="'+table_id+ '"class="benchmarkingTable_bars"></table>');
    $("#" + divid + "flex-container").append(input);
  
  
}

function compute_classification( divid, width, margin, height, metric_name){

    // delete previous plot and build new one
    d3.select('#'+ divid + '_svg').remove();
    
    if ($("#" +  divid + "_table").is(':empty')) { // if the table si empty, the classification is applied

        //change the text in the classification button
        d3.select("#" + divid + "_button").attr("value", "Get Back to Raw Results");
        sort_and_classify(metrics_values[divid], divid, width, margin, height, metric_name);

    } else { // if not, the table is emptied and the plot is built again

        // first, the previous results table is deleted
      var table = document.getElementById(divid + "_table");
      table.innerHTML = '';

      //change the text in the classification button
      d3.select("#" + divid + "_button").attr("value", "Sort & Classify Results");

      build_plot(metrics_values[divid], divid, width, margin, height, metric_name);
    }
  
  };

  function download_image(format, id){

    var download_id;
    if ($("#" +  id + "_table").is(':empty')) {
      download_id = id + "_svg_container"
    } else {
      download_id = id + "flex-container"
    }
    //save window' current scroll, as the html2canvas library needs to scroll up to the top right corner
    let scrollPos = [window.pageXOffset, window.pageYOffset]
    window.scrollTo(0,0);
    if (format == "svg"){
  
      saveAsSVG(id);
    } else {
  
      html2canvas(document.querySelector("#" + download_id)).then(function(canvas) {
  
        if (format == "pdf") {
          saveAsPDF(id, canvas.toDataURL(), 'benchmarking_chart_' + id + '.pdf');
        } else if (format == "png"){
          saveAsPNG(canvas.toDataURL(), 'benchmarking_chart_' + id + '.png')
        }
        
      });
    }
    
  
    window.scrollTo(scrollPos[0],scrollPos[1]);
  
  }
  
  function saveAsPDF(id, uri, filename) {
  
    var doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      // format: [750, 1200]
    })
    let width;
    let height = doc.internal.pageSize.getHeight();
    if ($("#" +  id + "_table").is(':empty')) {
      width = doc.internal.pageSize.getWidth();
    } else {
      width = doc.internal.pageSize.getWidth() - doc.internal.pageSize.getWidth() * 0.03 ; // this value might change when it is used as a widget in a different website
      height = doc.internal.pageSize.getHeight() - doc.internal.pageSize.getHeight() * 0.03;
    }
    doc.addImage(uri, 'PNG', 5, 5, width, height);
    doc.save(filename);
  
  }
  
  function saveAsPNG (uri, filename){
  
    var link = document.createElement('a');
  
    if (typeof link.download === 'string') {
  
        link.href = uri;
        link.download = filename;
  
        //Firefox requires the link to be in the body
        document.body.appendChild(link);
  
        //simulate click
        link.click();
  
        //remove the link when done
        document.body.removeChild(link);
  
    } else {
  
        window.open(uri);
  
    }
  }
  
  function saveAsSVG(id){
  
    var download_id = id + "_svg";
    var name = 'benchmarking_chart_' + id;
  
    d3_save_svg.save(d3.select('#'+download_id).node(), { filename: name});
  }