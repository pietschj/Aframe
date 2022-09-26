AFRAME.registerComponent('add', {       
  
  init: function () {      
      console.log("Hello. I am the add component.");
    // Simple example function: 
      let addingfunction = (x, y) => {
        return x + y;   // The function returns the product of x and y
      }

      console.log("Add componente: ", addingfunction(3, 5)); //console will log 8
  }  

});