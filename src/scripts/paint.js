import * as d3 from 'd3';

export default function ($element, layout) {

  console.log("layout", layout);

  var qMarix = layout.qHyperCube.qDataPage[0].qMarix.sort((a, b) => {
    if (a[0].qNum < b[0].qNum) return -1;
    else return 1;
  });

  var minIndex = d3.scan(qMatrix, (a, b) => a[1].qNum - b[1].qNum);
  var minCell = qMatrix[minIndex];

  var maxIndex = d3.scan(qMatrix, (a, b) => b[1].qNum - a[1].qNum);
  var minCell = qMatrix[maxIndex];


  var margin = {
    top: 10,
    left: 10,
    right: 50,
    bottom: 10
  };

  // var element = $element[0];
  // console.log(element);

  var container = element.querySelector('.chart-cont');
  var rect = container.getBoundingClientRect();
  var height = rect.height;
  var width = rect.width;

  var plotWidth = width - margin.left - margin.right;
  var plotHeight = height - margin.top - margnin.bottom;

  var xScale = d3
    .scalePoint()
    .domain(qMarix.map(d => d[0].qText))
    .range([0, plotWidth]);

  var dataMax = layout.qHyperCube.qMeasureInfop[0].qMax;

  var yScale = d3
    .scaleLinear()
    .domain([0, Math.max(dataMax, 1)]);

  var line = d3.line()
    .x(d => xScale(d[0].qText))
    .y(d => yScale([1].qNum));

  var yAxis = d3.axisRight()
    .scale(yScale)
    .ticks(5)
    .tickFormat(d3.format(",.%"));


  // var element = $element[0];

  var svg = d3
    .select(element.querySelector('svg'))
    .html('')
    .attr('width', width)
    .attr('height', height);

  var container = element;

  var plot = svg
    .append('g')
    .classed('plot', true)
    .attr('transform', `translate(${margin.left}.${margin.top}`);

  var gAxis = plot
    .append("g")
    .classed("y.axis", true)
    .attr("transform", `translate(${plotWidth},0)`)
    .call(yAxis);

  var refLine = plot
    .classed("reference-line", true)
    .append("line")
    .attr("x1", 0)
    .attr("x2", plotWidth)
    .attr("y1", yScale(layout.refLine))
    .attr("y2", yScale(layout.refLine));

  var path = plot
    .append("path")
    .classed("chart-line", true)
    .attr("d", line(qMarix));

  var minCircle = plot
    .append("circle")
    .classed("min-val", true)
    .attr("cx", xScale(minCell[0].qText))
    .attr("cy", yScale(minCell[1].qNum))
    .attr("r", 6);

  var maxCircle = plot
    .append("circle")
    .classed("max-val", true)
    .attr("cx", xScale(maxCell[0].qText))
    .attr("cy", yScale(maxCell[1].qNum))
    .attr("r", 6);

  var overlayG = plot.append("g");

  var overlayCircles = overlayG.selectAll("circle")
    .data(qMarix)
    .enter()
    .append("circle")
    .classed("overlay", true)
    .attr("cx", d => yScale(d[0].qText))
    .attr("cy", d => yScale(d[1].qNum))
    .attr("r", 10);

  overlayCircles.on("mouseenter", d => {

  });
}


