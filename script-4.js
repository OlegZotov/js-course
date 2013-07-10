function clone(node) {
	var clonedNode;
	if(node && node.nodeType == 3) {
		 return document.createTextNode(node.textContent);
	} else if (node && node.nodeType == 2) {
		clonedNode = document.createAttribute(node.nodeName);
		clonedNode.value = node.value;
		return clonedNode;
	} else if (node && node.nodeType == 1) {
		clonedNode = document.createElement(node.tagName);
		for (var propertyName in node.style) {
			clonedNode.style[propertyName] = node.style[propertyName];
		}
	}
	for (var i = 0; i < node.childNodes.length; i++) {
		clonedNode.appendChild(clone(node.childNodes[i]));
	}
	for (var i = 0; i < node.attributes.length; i++) {
		clonedNode.attributes.setNamedItem(clone(node.attributes[i]));
	}
	return clonedNode;
}

function main() {
	var domElement = document.getElementById("elementToClone");
	//var clonedElement = clone(domElement);
	var clonedElement = domElement.cloneNode(true);
	clonedElement.style.opacity = "0.5";
	domElement.parentNode.appendChild(clonedElement);
}

window.onload = main(); 



