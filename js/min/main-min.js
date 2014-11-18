/*

element = tag = Node

NODE=
Element - type 1 
ATTRIBUTE - type 2
TEXT - type 3



document.getElementById('main')
document.querySelector('.active');
document.querySelectorAll('.active');
*/

/*
var columns = document.querySelectorAll('.columns')

for(var item in columns){
	columns[item].onclick = function(){
	this.style.visibility = "hidden";
	}
}
*/

/*
$('.columns').click(function(){
	$(this).fadeOut('slow');
});
*/

$('.toggle').click(function(){
	$('.toggle + p').fadeToggle('slow');
});



