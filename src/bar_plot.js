import d3Tip from "d3-tip";

export function build_plot(data, divid, width, margin, height, metric_name){

    var formatPercent = d3.format(".0%");
  let formatComma = d3.format(",");
  let formatDecimal = d3.format(".4f");

    
  let min_y = d3.min(data, function(d) { return d.metric_value; });
  let max_y = d3.max(data, function(d) { return d.metric_value; });

  var x = d3.scaleBand()
  .range([0, width], .1)
  .domain(data.map(function(d) { return d.toolname; }))
  .padding(0.4);

  var y = d3.scaleLinear()
  .domain([min_y, max_y]).nice()
  .range([height, 0]);

 
  var xAxis = d3.axisBottom(x);

  var yAxis = d3.axisLeft(y).ticks(5);
  // .tickFormat(formatPercent);

  var tip = d3Tip();
  tip.attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
  return "<b><strong>" + d.toolname + "</strong></b><br/><span style='color:red'>value: </span>" + formatComma(d.metric_value);
  })

  // add div which will hold the svg
  d3.select('#'+divid + "flex-container").append("div")
  .attr("id", divid + "_svg_container")
  // append the svg element
  let svg = d3.select('#'+divid + "_svg_container").append("svg")
  .attr("id", divid + "_svg")
  .attr("class", "benchmarkingSVG")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.call(tip);

  //add axis labels
  svg.append("text")             
  .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 60) + ")")
  .style("text-anchor", "middle")
  .style("font-weight", "bold")
  .style("font-size", ".75vw")
  .text("TOOLS");

  svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("font-weight", "bold")
      .style("font-size", ".75vw")
      .text(metric_name); 

  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", "-.55em")
    .attr("transform", "rotate(-60)" );

  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("wpc_index");

  svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("fill", "orange")
    .attr("x", function(d) { return x(d.toolname); })
    .attr("width", x.bandwidth())
    // no bar at the beginning thus:
    .attr("height", function(d) { return (height - y(0)) > 0 ? height - y(0) : 0; }) // has to be >= 0
    .attr("y", function(d) { return y(0); })
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)

  // Animation
  svg.selectAll("rect")
  .transition()
  .duration(1000)
  .attr("y", function(d) { return y(d.metric_value); })
  .attr("height", function(d) { return height - y(d.metric_value); })
  .delay(function(d,i){return(i*10)})
  
  
  // add_arrow("aaa", svg, x, y, "-", data)

};

// function add_arrow(divid, svg, xScale, yScale, better, data){

//   // append optimization arrow
  
//   svg.append("svg:defs").append("svg:marker")
//   .attr("id", "opt_triangle")
//   .attr("class", function (d) { return divid+"___better_annotation";})
//   .attr("refX", 6)
//   .attr("refY", 6)
//   .attr("markerWidth", 30)
//   .attr("markerHeight", 30)
//   .attr("markerUnits","userSpaceOnUse")
//   .attr("orient", "auto")
//   .append("path")
//   .attr("d", "M 0 0 12 6 0 12 3 6")
//   .style("fill", "black")
//   .style("opacity", 0.7);

//   let x_axis = xScale.range();
//   let y_axis = yScale.domain();

  // var line = svg.data(data)
  // .enter().append("line")
  // .attr("class", function (d) { return divid+"___better_annotation";})
  // .attr("x1", function (d) {
  //   return xScale(d.toolname) + xScale.rangeBand()/2;
  // })
  // .attr("x2", function (d) {
  //     return xScale(d.toolname) + xScale.rangeBand()/2;
  // })
  // .attr("y1", function (d) {
  //     return yScale(d.metric_value) ;
  // })
  // .attr("y2", function (d) {
  //     return yScale(d.metric_value) ;
  // })
  //   .attr("stroke","black")  
  //   .attr("stroke-width",2)  
  //   .attr("marker-end","url(#opt_triangle)")
  //   .style("opacity", 0.4);  

//   svg.data(data)
//   .enter().append("text")
//   .attr("class", function (d) { return divid+"___better_annotation";})
//   .attr("x", function (d) {
//     return  xScale.rangeBand()/2;
// }).attr("y", function (d) {
//     return yScale(0.58) ;
// })
//   .style("opacity", 0.4)
//   .style("font-size", "7vw")
//   .text("better");

// };
