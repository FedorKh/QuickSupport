
$(document).ready(function(){
    
    $(".navbar-brand").css({"background-color":"red","color":"white"});
    //$(".dropdown-menu a").css("color","rgb(0,255,0)");

    $("ul.navbar-nav>li").click(function(){
       $(this).addClass("active");
       $("ul.navbar-nav>li").not(this).removeClass("active");
       $(".navbar-brand").css({"background-color":"transparent","color":"rgb(157, 157, 157)"});
    });
    
    $(".navbar-brand").click(function(){
        $(this).css({"background-color":"red","color":"white"});
        $("ul.navbar-nav>li").removeClass("active");
    });

    $(".dropdown-menu a").hover(function(){
        
        //$(this).css({"background-color":"#FFEFD5"});
    },function(){
       $(this).css({"background-color":"rgba(0,0,0,0)","color":"black"});
    });
});
