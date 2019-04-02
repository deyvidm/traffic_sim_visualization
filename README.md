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


# Examples

- Green car -- the focus of the simulation, and the only vehicle with simulated behaviour
- Red car -- pre-programmed leader car that Green follows while in its lane
- Blue car -- additional pre-programmed "actors" the Green car must interact with, should it wish to change lanes

### Standard

![Image of Yaktocat](/README_images/standard.gif)


