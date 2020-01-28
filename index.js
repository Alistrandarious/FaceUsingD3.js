import { select, arc } from 'd3';

const svg = d3.select('svg')


const width  = +svg.attr('width')
const height = +svg.attr('height')

const circle = svg.append('circle')
  .attr('r', 220)
	.attr('cx', width / 2)
	.attr('cy', height /2)
	.attr('fill', '#f5c242')
	.attr('stroke', 'black')
	.attr('stroke-width', 7.5)

const eyeRadius = 50
const leftEye = svg.append('circle')
  .attr('r', eyeRadius)
	.attr('cx', width / 2.5)
	.attr('cy', height /2.75)
	.attr('fill', 'white')
	.attr('stroke', 'black')
	.attr('stroke-width', 5)

const rightEye = svg.append('circle')
  .attr('r', eyeRadius)
	.attr('cx', width / 1.675)
	.attr('cy', height /2.75)
	.attr('fill', 'white')
	.attr('stroke', 'black')
	.attr('stroke-width', 5)

const rightEyePupil = svg.append('circle')
  .attr('r', 22.5)
	.attr('cx', width / 1.685)
	.attr('cy', height /2.65)
	.attr('fill', 'black')
	.attr('stroke', 'black')
	.attr('stroke-width', 5)
	.transition().duration(2000)
		.attr('cy', 200)
			.transition().duration(1000)
				.attr('cy', 190)

const leftEyePupil = svg.append('circle')
  .attr('r', 22.5)
	.attr('cx', width / 2.5)
	.attr('cy', height /2.65)
	.attr('fill', 'black')
	.attr('stroke', 'black')
	.attr('stroke-width', 5)
	.transition().duration(2000)
		.attr('cy', 200)
			.transition().duration(1000)
				.attr('cy', 190)

const g = svg.append('g')
	.attr('transform', `translate(${width/2}, ${height/1.75})`);

const smile = g.append('path')
	.attr('d', arc()({
		innerRadius: 0,
    outerRadius: 120,
    startAngle: Math.PI/2.,
    endAngle: Math.PI*1.5,
}))
  .attr('stroke', 'black')
	.attr('stroke-width', 5)
  .attr('fill', 'white')