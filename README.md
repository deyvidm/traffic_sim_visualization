# Traffic Simulation Visualization
<br>

## QuickStart



```bash
cd ./traffic_sim_visualiztion
php -S localhost:8000

```

Navigate your browser to **localhost:8000**

<br>

## What even is this? 

This is a visualization suite built for my research project, a multilane highway traffic simulation model developed in MATLAB ([here](https://github.com/deyvidm/traffic_sim)). 

It moves colourful rectangles (cars) according to a set of X and Y values over T time segments. 

Most of my efforts during the semester were directed toward developing the model as it was the focus of my research, and the bulk of content for grading. The visualizer was created in my spare time to help illustrate how the model behaved and served as an infromative visual aid during my final presentation. 


# Example

![simulation](/README_images/standard.gif)

- Green car -- the focus of the simulation
- Red car -- pre-programmed leader car that Green follows while in its lane
- Blue car -- additional pre-programmed "actors" the Green car must interact with, should it wish to change lanes

Every driver has a preferred following distance and speed which they always aim to maintain. 

In this example, the Red car was traveling at its optimal speed, but the Green car wanted to go faster. In order to accomplish its goals, the Green car must pass the Red car. This requires a safe lane change which can only happen if the Green car waits for the speeding Blue car to pass.

Once the Green car determines the maneuver is safe to perform, it changes lanes and adopts a new leader -- the Blue car that recently sped by. While the Green car may still travel under its desired speed limit, its new speed is faster (and more desirable) than the one it reached behind the Red car, and so the Green car will remain in the left lane until a better opportunity presents itself. 

Another intesreting occurance can be observed once the Green car changes lanes -- the Green car slows down in order to maintain its preferred following distance, relative to its new leader. 
