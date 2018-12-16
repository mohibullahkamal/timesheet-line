import * as d3 from 'd3';

export default function ($element, layout) {
  var qMarix = layout.qHyperCube.qDataPage[0].qMarix.sort((a, b) => {
    if (a[0].qNum < b[0].qNum) return -1;
    else return 1;
  });

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

  var element = $element[0];

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

  var qMatrix = layout.qHyperCube.qDataPage[0].qMatrix;
  console.log();
}
