// var div = document.querySelector('div');
// var WIDTH = window.innerWidth;
// var HEIGHT = window.innerHeight;

var addOne = document.getElementById('one');
var addTwo = document.getElementById('two');
var addThree = document.getElementById('three');




var dentures = document.getElementById('teeth');
var amnimal = document.getElementById('sloth');
var glasses = document.getElementById('clout');
var tie = document.getElementById('bowtie');



if (addOne.addEventListener) {
  	addOne.addEventListener("click", chooseItem1);
} else if (addThree.attachEvent) {
  	addOne.attachEvent("onclick", chooseItem1);
}

 if (addTwo.addEventListener) {
  	addTwo.addEventListener("click", chooseItem2);

} else if (addTwo.attachEvent) {
  	addTwo.attachEvent("onclick", chooseItem2);
}

if (addThree.addEventListener) {
  	addThree.addEventListener("click", chooseItem3);
} else if (addThree.attachEvent) {
  	addThree.attachEvent("onclick", chooseItem3);
}


// if (animal.addEventListener) {
//   	animal.addEventListener("click", chooseItem3);
// } else if (addThree.attachEvent) {
//   	animal.attachEvent("onclick", chooseItem3);
// }

// function add




function chooseItem1() {
  glasses.style.visibility="visible"
  
}


function chooseItem2() {
  tie.style.visibility="visible"
}

function chooseItem3() {
  // alert("teeth!");
  dentures.style.visibility="visible"
}




