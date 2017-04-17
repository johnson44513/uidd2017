$('document').ready(function(){

    $('.loading').hide('slow',function(){
      $('ul').show('slow'); 
      $('.box').show('slow');
      $('.intro').fadeIn('slow');
      $('.waterwave').show('slow');
    });
    $('.waterwave').css('width',$('body').width()*2);
    $('.waterwave').css('height',$('body').width()*2);



  
}); 


