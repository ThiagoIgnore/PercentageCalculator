//CREATE THE CALCS.JS FILE
//CREATE THE VARIABLES AND LINK THEM WITH HTML DOCUMENT
//CREATE A VARIABLE TO THE RESULTFIELD
//CREATE A VAR FORM TO LAUNCH THE EVENT LISTENER
//USE THE FUNCTION ADDEVENTLISTENER
//CHECK IF THE INPUT IS EMPTY AND SET THE ALERT
//IF IT'S NOT SET THE VARs X AND Y TO GET THE INPUTS OF THE FIELDS
//CALCULATE
//CHANGE TO A PERCENTAGE RESULT
//USE THE FUNCTION INNERTEXT TO DISPLAY THE RESULT
//USE THE FUNCTION PREVENT DEFAULT

var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var result = document.getElementById("resultField");
var form = document.getElementById("xIsWhatPercentOfY");

form.addEventListener("submit", function(event){
	if(!numField1.value || !numField2.value){
	alert("Please insert the values");
}else {
	var x = parseFloat(numField1.value);
	var y = parseFloat(numField2.value);
	
	var result = x / y;
	var percent = result * 100;
	
	resultField.innerText = "Answer: " + percent + "%";
	event.preventDefault();
}				  
});


