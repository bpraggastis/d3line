$(function(){
    var svg = d3.select('.circle1').append('svg')
      .attr('width','100%')
      .attr('height',100)
      .attr('id','bc')
      .style('border','solid grey');

    var circle1 = svg.append('circle')
      .attr("cx", '50%')
     .attr("cy", '50%')
    .attr("r", 20)
      .style('stroke', 'black')
      .style('fill','pink' );

    var svg2 = d3.select('.circle2').append('svg')
      .attr('width','100%')
      .attr('height',100)
      .attr('id','rc')
      .style('border','solid green')
      ;

    var circle2 = svg2.append('circle')
      .attr("cx", '50%')
     .attr("cy", '50%')
    .attr("r", 20)
      .style('fill', 'red')
      .style('stroke','blue')
      .style('stroke-width','3pt');

    var lightning = svg2.append('foreignObject')
      .attr('width', 40)
      .attr('height',40)
      .attr('x',20)
      .attr('y',20)
      .append('xhtml:div')
      .append('i').attr('class','lightning icon')

      


});
