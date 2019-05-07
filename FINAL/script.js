
// code based on https://wpbeaches.com/swap-image-via-button-with-jquery/

jQuery(document).ready(function($){

$('.1-button').on({
     'click': function(){
         $('#day_picture').attr('src','nyc_smorgasburg.jpg');
     }
 });
 
$('.2-button').on({
     'click': function(){
         $('#day_picture').attr('src','nyc_pardonmyfrench.jpeg');
     }
 });
 $('.3-button').on({
     'click': function(){
         $('#day_picture').attr('src','nyc_comedycellar.jpeg');
     }
 });
$('.4-button').on({
     'click': function(){
         $('#day_picture').attr('src','nyc_mrpurple.jpeg');
     }
     
 });
 });

jQuery(document).ready(function($){

$('.a-button').on({
     'click': function(){
         $('#food_picture').attr('src','nyc_smorgasburg.jpg');
     }
 });
 
$('.b-button').on({
     'click': function(){
         $('#food_picture').attr('src','nyc_bryantpark.jpg');
     }
 });
 
$('.c-button').on({
     'click': function(){
         $('#food_picture').attr('src','nyc_beergarden.jpeg');
     }
 });
 });

jQuery(document).ready(function($){

$('.one_button').on({
     'click': function(){
         $('#energy_picture').attr('src','nyc_museumofillusions.jpeg');
     }
 });
 
$('.two_button').on({
     'click': function(){
         $('#energy_picture').attr('src','nyc_websterhall.jpeg');
     }
 });
 
$('.three_button').on({
     'click': function(){
         $('#energy_picture').attr('src','nyc_bryantpark.jpg');
     }
 });
$('.four_button').on({
     'click': function(){
         $('#energy_picture').attr('src','nyc_comedycellar.jpeg');
     }
 });
 });


var restaurantOne = document.getElementById('js_1');
var restaurantTwo = document.getElementById('js_2');
var restaurantThree = document.getElementById('js_3');



var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');


var one1 = document.getElementById('one1');
var two2 = document.getElementById('two2');
var three3 = document.getElementById('three3');



var one_1 = document.getElementById('one_1');
var two_2 = document.getElementById('two_2');
var three_3 = document.getElementById('three_3');
var four_4 = document.getElementById('four_4');


// caption one swap
one.addEventListener('click', function(){
	restaurantOne.innerText = "Smorgasburg"

})

two.addEventListener('click', function(){
	restaurantOne.innerText = 'Pardon My French'
})

three.addEventListener('click', function(){
	restaurantOne.innerText = "Comedy Cellar"
})

four.addEventListener('click', function(){
	restaurantOne.innerText = "Mr.Purple"
})

// Caption two swap
one1.addEventListener('click', function(){
	restaurantTwo.innerText = "Smorgasburg"

})

two2.addEventListener('click', function(){
	restaurantTwo.innerText = 'Bryant Park'
})

three3.addEventListener('click', function(){
	restaurantTwo.innerText = "Beer Garden"
})



// caption three swap

one_1.addEventListener('click', function(){
	restaurantThree.innerText = "Museum of Illusions"
})

two_2.addEventListener('click', function(){
	restaurantThree.innerText = 'Webster Hall'
})

three_3.addEventListener('click', function(){
	restaurantThree.innerText = "Bryant Park"
})

four_4.addEventListener('click', function(){
	restaurantThree.innerText = "Comedy Cellar"
})

var heading = document.getElementById('title');

var name = "Oliwia's"

heading.innerText = "Enter " + name + " Information"



