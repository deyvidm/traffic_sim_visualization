window.jQuery = window.$;


$.ajax({
  url:'http://localhost:8000/serve.php',
  method:'get',
  success:function(data) {

    var total_duration = animate(data);

    generate_graph(
      '#acceleration_chart',
      'time',
      'acceleration', 
      format_data_set(data[0], data[1], 'acceleration', '#f74246'),
      total_duration
    );

    generate_graph(
      '#velocity_chart',
      'time',
      'velocity', 
      format_data_set(data[0], data[2], 'velocity', '#f74246'),
      total_duration
    );

    generate_graph(
      '#position_chart',
      'time',
      'difference in position', 
      format_data_set(
        data[0], 
        data[3].map(function(item, index) {
          return item - data[6][index];}), 
        'difference in position', 
        '#f74246'
      ),
      total_duration
    );

  },
  error:function(data){
    alert("😬");
  }
});

var animated_elements = [];
set_playback_handlers();