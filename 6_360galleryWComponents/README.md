Modified version of the tutorial from 

https://learn.framevr.io/project4/part5

This gallery contains multiple globes
how does it work?
a) Aframe has loaded components that handle the hiding of the primitives and loading a new texture into a <a-sky> component. This is called sphereexpand.js. 
  
b)  Aframe has loaded component that returns the visibility of the world component when the exit button is clicked at the bottom of the view (white circle)

c) The items in the gallery are fully built using <entities>, for example the globes are made out of a sphere, box and a plane with text.

d) The scene has an empty <a sky> component. When a user clicks on a sphere the src attribute is copied to this component and the elements that belong to the class ' homeworld' are turned off. 

e) The backhome component restores the visiblity of the 3d components and resets the sphere to empty. 
  
  