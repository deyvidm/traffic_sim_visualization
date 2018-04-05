window.jQuery = window.$;

(function( $ ) {
        $.fn.pop = function() {
                var top = this.get(-1);
                this.splice(this.length-1,1);
                return top;
        };

        $.fn.shift = function() {
                var bottom = this.get(0);
                this.splice(0,1);
                return bottom;
        };
})( jQuery );

$(".car").hide()

$.ajax({
    url:'http://localhost:8000/serve.php',
    method:'get',
    success:function(data) {
        var total_duration = animate(data);

        // generate_graph(
        //     '#acceleration_chart',
        //     'time',
        //     'acceleration', 
        //     [
        //         format_data_set(data.time, data.leader.acc, 's1', '#f74246'),
        //         format_data_set(data.time, data.follower.acc, 's2', 'green'),
        //         // format_data_set(data.time, data.follower_2.acc, 's3', 'blue')
        //     ],
        //     total_duration
        // );

        //  generate_graph(
        //   '#acceleration_chart',
        //   'time',
        //   'acceleration', 
        //   [
        //     format_data_set(data.time, data.leader.acc, 's1', '#f74246'),
        //     format_data_set(data.time, data.follower.acc, 's2', 'green')
        //   ],
        //   total_duration
        // );


        // generate_graph(
        //     '#velocity_chart',
        //     'time',
        //     'velocity', 
        //     [
        //         format_data_set(data.time, data.leader.speed, 's1', '#f74246'),
        //         format_data_set(data.time, data.follower.speed, 's2', 'green'),
        //         // format_data_set(data.time, data.follower_2.speed, 's3', 'blue')
        //     ],
        //     total_duration
        // );

        // generate_graph(
        //     '#velocity_chart',
        //     'time',
        //     'velocity', 
        //     [
        //         format_data_set(data.time, data.leader.speed, 's1', '#f74246'),
        //         format_data_set(data.time, data.follower.speed, 's2', 'green')
        //     ],
        //     total_duration
        // );
        

        // var diff_in_pos = data.leader.pos.map(function(item, index) {
        //   // In this case item correspond to currentValue of array a, 
        //   // using index to get value from array b
        //   return item - data.follower.pos[index];
        // })

        // generate_graph(
        //     '#position_chart',
        //     'time',
        //     'position', 
        //     [
        //         format_data_set(data.time, diff_in_pos, 's1', '#f74246'),
        //         // format_data_set(data.time, data.leader.pos, 's1', '#f74246'),
        //         // format_data_set(data.time, data.follower.pos, 's2', 'green'),
        //         // format_data_set(data.time, data.follower_2.pos, 's3', 'blue')
        //     ],
        //     total_duration
        // );

        // generate_graph(
        //     '#position_chart',
        //     'time',
        //     'position', 
        //     [
        //         format_data_set(data.time, data.leader.pos, 's1', '#f74246'),
        //         format_data_set(data.time, data.follower.pos, 's2', 'green')
        //     ],
        //     total_duration
        // );
        
        

    },
    error:function(data){
        alert("😬");
    }
});

function sinAndCos() {
    var sin = [],sin2 = [],
            cos = [];

    //Data is represented as an array of {x,y} pairs.
    for (var i = 0; i < 100; i++) {
        sin.push({x: i, y: Math.sin(i/10)});
        sin2.push({x: i, y: Math.sin(i/10) *0.25 + 0.5});
        cos.push({x: i, y: .5 * Math.cos(i/10)});
    }

    //Line chart data should be sent as an array of series objects.
    return [
        {
            values: sin,      //values - represents the array of {x,y} data points
            key: 'Sine Wave', //key  - the name of the series.
            color: '#ff7f0e'  //color - optional: choose your own line color.
        },
        {
            values: cos,
            key: 'Cosine Wave',
            color: '#2ca02c'
        },
        {
            values: sin2,
            key: 'Another sine wave',
            color: '#7777ff',
            area: true      //area - set to true if you want this line to turn into a filled area chart.
        }
    ];
}


var animated_elements = [];
set_playback_handlers();