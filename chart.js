function generate_graph(elem_selector, x_axis_label, y_axis_label, data, total_duration)
{
  nv.addGraph(function() {
    var chart = nv.models.lineChart()
                  .margin({left: 100, right: 100})  //Adjust chart margins to give the x-axis some breathing room.
                  .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                  .showYAxis(true)        //Show the y-axis
                  .showXAxis(true)        //Show the x-axis
    ;

    chart.xAxis
        .axisLabel(x_axis_label)
        .tickFormat(d3.format('.02f'))
        .ticks(20)

    chart.yAxis
        .axisLabel(y_axis_label)
        .tickFormat(d3.format('.02f'))

    // Done setting the chart up? Time to render it!
    d3.select(elem_selector)    // Select the <svg> element you want to render the chart in.   
        .datum(data)                    // Populate the <svg> element with chart data...
        .call(chart)                    // Finally, render the chart!
        .on('end', follow(elem_selector, total_duration))            // Now that the chart is rendered and ready, initiate the follow cubelet 
        
    nv.utils.windowResize(function() { chart.update() });

    return chart;
  });
}

function format_data_set(x_vals, y_vals, key, colour) {
  if (x_vals.length != y_vals.length) {
    return null;
  }
  values = []
  for (var i = 0; i < x_vals.length; i++) {
    values.push({x: x_vals[i], y: y_vals[i]});
  }

  return [
  {
    values: values,
    key: key,
    color: colour // THERE IS ONLY ONE RIGHT SPELLING, AND IT USES 'u'
  }]
}

function follow(elem_selector, total_duration)
{
  var path_selector = elem_selector + '> g > g > g.nv-linesWrap.nvd3-svg > g > g > g.nv-groups > g > path';

  animated_elements.push(anime({
    targets: '#time-line',
    translateX: document.querySelector(path_selector).getBoundingClientRect().width,
    easing: 'linear',
    duration: total_duration,
    autoplay: false
  }));
}

function get_start_of_path(path_container_selector, path_selector)
{
  var froot = document.querySelector(path_container_selector);
  var path = document.querySelector(path_selector);
  var point = froot.createSVGPoint();
  point.x = 0;  // replace this with the x co-ordinate of the path segment
  point.y = 0;  // replace this with the y co-ordinate of the path segment
  var matrix = path.getTransformToElement(froot);
  var position = point.matrixTransform(matrix);

  return position;
}