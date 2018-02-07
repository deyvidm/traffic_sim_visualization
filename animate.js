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
      format_data_set(data[0], data[1], 'acceleration', '#ff7f0e'),
      total_duration
    );

    generate_graph(
      '#velocity_chart',
      'time',
      'velocity', 
      format_data_set(data[0], data[2], 'velocity', '#ff7f0e'),
      total_duration
    );

  },
  error:function(data){
    alert("error");
  }
});

function animate(data){
  leader_pos = data[3].slice();
  follower_pos = data[6].slice();

  var size_scaler = 6;
  var transition_duration = 250;

  
  var canvas_width = Math.max.apply(null, leader_pos) + 50;
  var canvas_height = 50;
  $("#canvas").attr('width',canvas_width*size_scaler);
  $(".chart").attr('width',canvas_width*size_scaler);
  $("#canvas").attr('height',canvas_height*size_scaler);
  

  var leader_translations = [];
  var follower_translations = [];
  for (var i = 0; i < follower_pos.length; i++) {  
    leader_translations.push({value: leader_pos[i]*size_scaler, duration: transition_duration});
    follower_translations.push({value: follower_pos[i]*size_scaler, duration: transition_duration});
  }
  leader_translations[0].transition_duration = 0;
  follower_translations[0].transition_duration = 0;

  var length = 4;
  var width = 2
  $("#leader").attr('width',length*size_scaler) // object.width = car.length * size_scaler
              .attr('height',width*size_scaler)
              .attr({ fill: '#f74246' })
              // .attr({x: leader_translations[0].value })

  $("#follower").attr('width',length*size_scaler) // object.width = car.length * size_scaler
                .attr('height',width*size_scaler)
                .attr({ fill: '#3ccb3e' })
                // .attr({x: follower_translations[0].value })
  
  anime({
    targets: '#leader',
    translateX: leader_translations,
    easing: 'linear',
    autoplay: false
  });

  anime({
    targets: '#follower',
    translateX: follower_translations,
    easing: 'linear',
    autoplay: false
  });

  // anime({
  //   target: '#buffer',
  //   translateX: leader_translations.map(function (val){
  //     val.value = val.value + (width*size_scaler);
  //     return val;
  //   }),
  //   autoplay: false
  // })

  return transition_duration * leader_translations.length;

  // anime({
  //   targets: '#m10',
  //   translateX: leader_translations.map(function (val){
  //     val.value = val.value -(10*size_scaler);
  //     return val;
  //   }),
  //   easing: 'linear'
  // });

}