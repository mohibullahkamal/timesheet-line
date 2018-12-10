import * as d3 from 'd3';

export default function($element, layout) {
  var element = $element[0];
  //   console.log(element);

  var container = element.querySelector('.chart-cont');
  var rect = container.getBoundingClientRect();
  var height = rect.height;
  var width = rect.width;

  var svg = d3.select(element.querySelector('svg'));
}
