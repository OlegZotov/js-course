function Wobbler(el, minDegree, maxDegree){
	this.el = el;
	this.minDegree = minDegree;
	this.maxDegree = maxDegree;
	this.genNum = 0;
	this.shift = 0.01;
	this.interval = 16;
	var this_ = this;
	var funRotate = this.rotate;
	setInterval(function(){funRotate(this_)}, this.interval);
}

Wobbler.prototype.rotate = function(thisWobbler) {
	thisWobbler.genNum += thisWobbler.shift;
	var rotateDegree = getSinDegree(thisWobbler.genNum, thisWobbler.minDegree, thisWobbler.maxDegree);
	var rotateCSSProperty = "rotate(" + rotateDegree + "deg)";
    setBrowserIndependentProperty(thisWobbler.el, "transform", rotateCSSProperty);

    return rotateDegree;
}

function getSinDegree(val, min, max){
	return (min + (max - min) / 2 + Math.sin(val) * (max - min) / 2);
}

function setBrowserIndependentProperty(div, property, value) {
    div.style[property] = value;
    div.style["-ms-" + property] = value;
    div.style["-o-" + property] = value;
    div.style["-moz-" + property] = value;
    div.style["-webkit-" + property] = value;
}

function main() {
    //var domElement = document.getElementById("test");
	//rotate(domElement);
	//var w = new Wobbler(domElement, -30, 30);
	//setInterval(function(){rotate(domElement)}, 16);

	var divs = document.getElementsByClassName("rotating");
    for(var i = 0; i < divs.length; i++) {
        new Wobbler(divs[i], -80, 80);
    }
}

window.onload = main(); 

