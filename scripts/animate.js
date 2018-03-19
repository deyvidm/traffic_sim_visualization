function animate(data){
  leader_pos = data.leader.pos.slice();
  follower_pos = data.follower.pos.slice();

  var lane_scaler = 3;
  var size_scaler = 3;
  var transition_duration = 250;
  
  var length = 4;
  var width = 2

  var canvas_width = Math.max.apply(null, data.leader.pos) + 40;
  var canvas_height = 20;
  $("#canvas").attr('width',canvas_width*size_scaler);
  $(".chart").attr('width',canvas_width*size_scaler);
  $("#canvas").attr('height',canvas_height*size_scaler);
  $("#charts").css('width',canvas_width*size_scaler);
  $("#time-line").css('height', ($("#charts").height() - 50).toString() + 'px'); 
  $("#time-line").css('top', ($("#canvas").height() + 25).toString() + 'px'); 

  $(".car").attr('width',length*size_scaler) // object.width = car.length * size_scaler
            .attr('height',width*size_scaler)
  
  var vehicles = {};
  for (key in data) {
    if (key !== "time") {
      vehicles[key] = data[key];
    }
  }
  
  // need to get() and reverse() because JQUERY SETS DON'T HAVE A .shift() METHOD
  leaders = $(".leader").get();
  followers = $(".follower").get();

  var translations = [];
  var counter = 0;
  var biggest_lane = 0;
  for (v in vehicles) { 
    var max = vehicles[v].lane.reduce(function(a, b) {
      return Math.max(a, b);
    });
    if (max > biggest_lane){
      biggest_lane = max;
    }

    translations[counter] = {'x': [], 'y':[]};
    for (var i = 0; i < vehicles[v].pos.length; i++) { 
      translations[counter]['x'].push({value: vehicles[v].pos[i]*size_scaler, duration: transition_duration});
      translations[counter]['y'].push({value: vehicles[v].lane[i]*lane_scaler*size_scaler, duration: transition_duration});
    }
    translations[counter]['x'][0].transition_duration = 0
    translations[counter]['y'][0].transition_duration = 0

    if (v === "leader") {
      activate_vehicle(leaders.shift(), translations[counter]);
    }
    else if (v.includes("follower")) {
      activate_vehicle(followers.shift(), translations[counter]);
    }
    else {
      console.log(v);
      console.log("neither leader nor follower");
    }

    counter++;
  }
  
  $("#canvas").attr('height',canvas_height*size_scaler + biggest_lane*size_scaler*lane_scaler);

  return transition_duration * translations[0]['x'].length;  
}

// element NEEDS to be a DOM Object
function activate_vehicle(element, translations)
{
  //make sure the cars start the correct distance apart from each other
  translations['x'][0].duration = 0
  translations['y'][0].duration = 0
  // translations[0].duration = 0
  console.log(translations['x'][0]);
  $(element).show() 
  animated_elements.push(anime({
    targets: element,
    translateX: translations['x'],
    translateY: translations['y'],
    easing: 'linear',
    autoplay: false
  })); 
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