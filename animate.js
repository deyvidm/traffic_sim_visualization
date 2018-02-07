function animate(data){
  leader_pos = data[3].slice();
  follower_pos = data[6].slice();

  var size_scaler = 6;
  var transition_duration = 250;

  
  var canvas_width = Math.max.apply(null, leader_pos) + 50;
  var canvas_height = 20;
  $("#canvas").attr('width',canvas_width*size_scaler);
  $(".chart").attr('width',canvas_width*size_scaler);
  $("#canvas").attr('height',canvas_height*size_scaler);
  $("#time-line").css('height', ($("#charts").height() - 50).toString() + 'px'); 
  $("#time-line").css('top', ($("#canvas").height() + 25).toString() + 'px'); 



  var leader_translations = [];
  var follower_translations = [];
  for (var i = 0; i < follower_pos.length; i++) {  
    leader_translations.push({value: leader_pos[i]*size_scaler, duration: transition_duration});
    follower_translations.push({value: follower_pos[i]*size_scaler, duration: transition_duration});
  }
  leader_translations[0].transition_duration = 0;
  follower_translations[0].transition_duration = 0;

  var total_duration = transition_duration * leader_translations.length;

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
  
  animated_elements.push(anime({
    targets: '#leader',
    translateX: leader_translations,
    easing: 'linear',
    autoplay: false
  }));

  animated_elements.push(anime({
    targets: '#follower',
    translateX: follower_translations,
    easing: 'linear',
    autoplay: false
  }));

  animated_elements.push(anime({
    targets: '#follower',
    translateX: follower_translations,
    easing: 'linear',
    autoplay: false
  }));

  return total_duration;

  // anime({
  //   targets: '#m10',
  //   translateX: leader_translations.map(function (val){
  //     val.value = val.value -(10*size_scaler);
  //     return val;
  //   }),
  //   easing: 'linear'
  // });

}

function set_playback_handlers()
{
  document.querySelector('#playPause .play').onclick = function() { 
    for (var i = 0; i < animated_elements.length; i++) {
      animated_elements[i].play();
    }
  };
  document.querySelector('#playPause .pause').onclick = function() {
    for (var i = 0; i < animated_elements.length; i++) {
      animated_elements[i].pause();
    }
  }
   document.querySelector('#playPause .restart').onclick = function() {
    for (var i = 0; i < animated_elements.length; i++) {
      animated_elements[i].restart();
    }
  }
}