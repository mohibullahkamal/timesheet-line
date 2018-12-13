import * as d3 from 'd3';

export default function($element, layout) {
  var element = $element[0];
  //   console.log(element);

  var container = element.querySelector('.chart-cont');
  var rect = container.getBoundingClientRect();
  var height = rect.height;
  var width = rect.width;

  var svg = d3
    .select(element.querySelector('svg'))
    .html('')
    .attr('width', width)
    .attr('height', height);

  var margin = {
    top: 10,
    left: 10,
    right: 50,
    bottom: 10
  };

  var plot = svg
    .append('g')
    .classed('plot', true)
    .attr('transform', `translate(${margin.left}.${margin.top}`);

  var qMarix = layout.qHyperCube.qDataPage[0].qMarix;
  console.log();
}
