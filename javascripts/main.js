/* Vars */

var Power = false;


/* Functions */

function PowerOn(){
	Power = true;
    Dim("PowerOff");
	Undim("PowerOn");
};

function PowerOff(){
	Power = false;
	Dim("PowerOn");
	Undim("PowerOff");
};

function update(what,number){
    document.getElementById(what).innerHTML = number;

};

function Disabled(elem){
	var elem = document.getElementById(elem);
	elem.style.opacity = 0;
};

function Dim(elem){
	var elem = document.getElementById(elem);
	elem.style.opacity = 0.25;
};

function Undim(elem){
	var elem = document.getElementById(elem);
	elem.style.opacity = 1;
};


/* Window Timer - 1 Second interval */
window.setInterval(function(){


}, 1000);
