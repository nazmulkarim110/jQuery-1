$(document).ready(function(){
    


$('.buttn').click(function(){

           alert("Discover the world’s top web designer's portfolio");
 });       


$('#hide').click(function(){
    $('#t_hs').hide("Fast");
 }); 

    
$('#show').click(function(){
    $('#t_hs').show('slow');
 });
    
 
$('#toggle').click(function(){
    $('#t_toggle').toggle(1000);
 });    
    

$('#fadein').click(function(){
    $('#t_fade').fadeIn(1000);
 });    
    
    
$('#fadeout').click(function(){
    $('#t_fade').fadeOut(1000);
 });   
    
    
$('#ftoggle').click(function(){
    $('#t_fade').fadeToggle(1000);
 });
    
    
    
$('.slide_panel').click(function(){
    $('.slideshow').slideToggle("Fast");
 });    
    
    
    
    
    
    
    
}); 