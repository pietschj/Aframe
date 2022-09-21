# A-Frame Project: Earth animated

### Primitives
A number of A-Frame primitives exist such as
* `<a-box>`
* `<a-sphere>`
* `<a-text>`
* Further info is available here:[Documenation: HTML Primitives](https://aframe.io/docs/1.2.0/introduction/html-and-primitives.html)

* Everything we want to be in our virtual reality scene should be wrapped in between `<a-scene>` and `<a-scene>` tags. 

```
<a-scene>
  <a-sphere color="red" radius="4"></a-sphere>
<a-scene>
```

### Moon
* create a smaller sphere that is nested as as a child inside the earth sphere.
```    
      <a-sphere id="globe"...>
         <!-- We are nested inside the Earth primitive-->
         <a-sphere      
             position="5 0 0"
             radius=".35"

          >
          </a-sphere>
        <!-- We are closing the <a-sphere> Earth primitive-->
    </-sphere>
```

### Clouds
* Create a 3rd sphere that is identical to earth but has a slightly larger radius.




### Textures
* The textures are stored in the assets folder.
* It is recommended to use the URL link of Files in the assets folder on Glitch as this avoids CORS errors. 
* Remove the original colour property for the texture to appear. 
* Add the following to the `src` property to the Earth sphere.

```
  src="https://cdn.glitch.com/e3f209ca-588e-463f-b3cd-7379febc0239%2Fearth_atmos_4096.jpg?v=1631737973931"

``` 
* Add the following to the `src` property to the Moon sphere.

```
  src="https://cdn.glitch.com/e3f209ca-588e-463f-b3cd-7379febc0239%2Fearth_atmos_4096.jpg?v=1631737973931"

```  
* Finally, add this texture to the Cloud sphere
```src=https://cdn.glitch.com/e3f209ca-588e-463f-b3cd-7379febc0239%2Fmoon_1024.jpg?v=1631781009367```




### Entities

Maybe, we want two spheres together like the Earth and the Moon? We can **wrap** them in a special tag called `<a-entity>`. Think of it as like an invisible box to put things together in. 

```
<a-entity>
  <a-sphere id="wrappedUp" color="red" radius="4" position="1 -1 1"></a-sphere>
  <a-sphere id="wrappedUpTogether" color="blue" radius="4" position="0 -0 1"></a-sphere>
</a-entity>
```
* The Earth and Cloud spheres can be nested inside a container `<a-entity></a-entity>` Tag. 
* However, the position attribute needs to be moved from the Sphere primitive to the `<a-entity>` element. 
```
<a-entity id="earthMoon" position="0 1.25 -5">
```

### Animation

- Animations are initiated by adding a animation attribute to the entities.
- The animations can be fine-tuned by setting property/value pairs. 
- add this animation attribute to the earth sphere

```
animation="property: rotation;
                             to: 0 360 0;
                             loop: true;
                             dur: 15000;
                             easing: linear"
```
- The earth should be spinning now.
* Add something like this to the moon `<a-sphere>`
```
             animation="property: rotation;
                        to=0 360 0; 
                        easing=linear;         
                        dur=1000"
```

### Skybox
* Insert the following texture and animation property for the `<a-sky>` primitive.
```
        src="https://cdn.glitch.com/e3f209ca-588e-463f-b3cd-7379febc0239%2Fnightsky.jpg?v=1631740300486"
        animation="property: rotation;
                             from: 0 -90 -1;
                             to: 0 270 0;
                             loop: true;
                             dur: 2000000;
                             easing: linear;
                             repeat: indefinite"
   
```

### Cameras
* This adds a camera that allows us to move around the scene with WASD keys and use mouse conrol to Pan and Zoom
* Please notet that the camera is nested inside an entity object.
* The camera inherits the position and rotation from the parent. 
```
            <a-entity position="-5 5 5" rotation="-13 0 0">
                <a-entity camera look-controls wasd-controls></a-entity>
            </a-entity>
```

### Asset Management

* A-frame contains a pre-loading asset management system.
* insert a   `<a-assets>  </a-assets>` object and load any required assets within. 
* While the assets are preloading a blue HTML page is displayed. 
* The a-frame scene only renders once all assets have been loaded. 
* Also set the **cross-origin** `<img>` attribute
to be anonymous.

```
    <a-assets>
		    <img id="ImgEarth" src="https://cdn.glitch.com/e3f209ca-588e-463f-b3cd-7379febc0239%2Fearth_atmos_4096.jpg?v=1631737973931" crossorigin="anonymous" />
        <img id="ImgClouds" src="https://cdn.glitch.com/e3f209ca-588e-463f-b3cd-7379febc0239%2Fearth_clouds_2048.png?v=1631739587364" crossorigin="anonymous" />
		    <img id="ImgMoon" src="https://cdn.glitch.com/e3f209ca-588e-463f-b3cd-7379febc0239%2Fmoon_1024.jpg?v=1631781009367" crossorigin="anonymous" />
        <img id="Imgsky" src="https://cdn.glitch.com/e3f209ca-588e-463f-b3cd-7379febc0239%2Fnightsky.jpg?v=1631740300486" crossorigin="anonymous" />
       
      </a-assets> 
```
* As you can see, each resource has an id attribute. 
* This gets used to apply a texture to a primitive like so:
   ```
   <a-sky
        src="#ImgSky"
        animation="property: rotation;
                             from: 0 -90 -1;
                             to: 0 270 0;
                             loop: true;
                             dur: 2000000;
                             easing: linear;
                             repeat: indefinite"
      >
    ```  
    
   * This can be viewed in index_solution2.html
   
  ### Text
  
  The `<a-text>` primitive renders Text. 
  * [Documenation: Text ](https://aframe.io/docs/1.2.0/components/text.html#stock-fonts)
  * set font, position and rotation as usual
  * the text attribute specifies the color.
  * side has to be set to double if you want to see the backfaces of the text.
  ```
   <a-text font="kelsonsans" value="Earth" width="6" position="0.5 1.8 0" rotation="0 180 0" text="color: #ea2e2e; side: double"></a-text>
  ```
  * add a `<a-text>` object above the Earth.
  
  ### On your own:
  Try out the following:
  1) Make the Earth text spin alongside the Earth sphere. 
    * This will require nesting objects inside a `<a-entitiy>` object. 
    * The aninmation will need to be aplied to the entity instead of the `<a-sphere>` directly.
  2) Add a text above the Moon, again this should spin with the moon.
    * the `text="side: double"` needs to be applied, otherwise the text will disappear when the camera views the backfaces.
    
    * The solution can be viewed in index_solution3.html  