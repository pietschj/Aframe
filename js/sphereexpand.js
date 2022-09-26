 AFRAME.registerComponent('sphereexpand', {
    
   init: function () {
      
     let newSrc = this.el.getAttribute('src');
     console.log("src: " , newSrc);
      let homeworldelements = document.querySelectorAll(".homeworld");
      let sky = document.querySelector("#sky");

      let sphereloader = () => {
      sky.setAttribute("src", newSrc);
      homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", false)})
      }

      this.el.addEventListener('click', sphereloader);
        
   }});
  
  

