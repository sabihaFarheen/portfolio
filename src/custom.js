import $ from 'jquery';
$(document).ready(function(){
    // active
    $('.menu-link li a i').click(function(){
        $('.menu-link a i').removeClass("active");
        $(this).addClass("active");
    });
    // pre-load function
    $(function() {
        $(".preload").fadeOut(1500, function() {
            $(".content").fadeIn(1000);        
        });
    });
    
    $('.navbar-nav li a').on('click', function(){
        if(!$( this ).hasClass('dropdown-toggle')){
            $('.navbar-collapse').collapse('hide');
        }
    });

      // sticky navigation
   function checkScroll() {
        let wind = $(window);
        
        return wind.scrollTop();
    }
  
    $(window).scroll(function(){
        let val = checkScroll();
              
        if(val > 1){
            $('header .navbar-light').addClass('sticky');
           
        }
        else{
            $('header .navbar-light').removeClass('sticky');
        }
                })
                

               
// update time
function getNewTime(){
    let newDate = new Date();
    let totalDegrees = 360;
    let totalHours = 12;
    let totalSecs = 60;
    let totalMilliSec = 1000;


    let newHrs = (newDate.getHours() + newDate.getMinutes()/totalSecs)/totalHours*totalDegrees;
    let newMinutes = newDate.getMinutes()/totalSecs*totalDegrees;
    let newSeconds = (newDate.getSeconds() + newDate.getMilliseconds()/totalMilliSec)/totalSecs*totalDegrees;
    
    

    $('#hours-pointer').css({
        transform: "rotate("+ newHrs +"deg)"
    });
    $('#mins-pointer').css({
        transform: "rotate("+ newMinutes +"deg)"
    });
    $('#secs-pointer').css({
        transform: "rotate("+ newSeconds +"deg)"
    });
}
  
    
    
setInterval(getNewTime,1000);



})
