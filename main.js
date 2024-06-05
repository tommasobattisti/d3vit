import './style.css'

import * as d3 from 'd3'



const svg = d3.select('body').append('svg')
          .attr('width', 300).attr('height', 150)

svg
    .append('circle')
    .attr('cx', 150)
    .attr('cy', 70)
    .attr('r', 50)
