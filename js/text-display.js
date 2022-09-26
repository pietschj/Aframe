AFRAME.registerComponent('text-display', {
	
	init: function()
	{
		this.controllerData = document.querySelector("#controller-data").components["controller-listener"];
		this.text = "";
	},

	tick: function()
	{
		this.text = 
		           "Left Controller:" + "\n" +
		           "Joystick X: " + this.controllerData.leftAxisX + "\n" +
		           "Joystick Y: " + this.controllerData.leftAxisY + "\n" + 
		           "[Y] Button: " + this.controllerData.buttonY.pressing + "\n" +
		           "[X] Button: " + this.controllerData.buttonX.pressing + "\n" +
		           "   Trigger: " + this.controllerData.leftTrigger.pressing + "\n" +
		           "      Grip: " + this.controllerData.leftGrip.pressing + "\n" +
		           "----------------------------------- \n" +
		           "Right Controller:" + "\n" +
		           "Joystick X: " + this.controllerData.rightAxisX + "\n" +
		           "Joystick Y: " + this.controllerData.rightAxisY + "\n" +
		           "[B] Button: " + this.controllerData.buttonB.pressing + "\n" +
		           "[A] Button: " + this.controllerData.buttonA.pressing + "\n" +
		           "   Trigger: " + this.controllerData.rightTrigger.pressing + "\n" +
		           "      Grip: " + this.controllerData.rightGrip.pressing + "\n";
		           
		this.el.setAttribute( "text", "value", this.text );
	},
	
});