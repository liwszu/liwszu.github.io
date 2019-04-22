function squareNumber(){
  var squareMe = document.getElementById('square-input').value
  console.log("The result of squaring the number " + squareMe + " is " + squareMe * squareMe + ".")
}

function halfNumber(){
  var halfMe = document.getElementById('half-input').value
  console.log("Half of " + halfMe + " is " + halfMe/2  + ".")
  
}

function percentOf(){
  var num1 = document.getElementById('percent1-input').value
  var num2 = document.getElementById('percent2-input').value
  var perc = num1/num2
  console.log(num1 + " is " + perc*100 + "% of " + num2)
  
}

function areaOfCircle(){
  var radius = document.getElementById('area-input').value
  var area = Math.PI * radius * radius
  console.log("The area for a circle with the radius of " + radius + " is " + area)
}