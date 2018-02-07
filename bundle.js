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

  },
  error:function(data){
    alert("error");
  }
});

var animated_elements = [];
set_playback_handlers();