$(document).ready(function(){
    $("#btn").click(function(){
        $(this).toggleClass("mobileMenuOpened");
        $("#navbar-collapse").hide();
        $(".mobile_menu_wrapper").toggle();
        $(".leftImgOnbgimg").css("bottom","130px");
        $(".rightImgOnbgimg").css("bottom","50px");
    });
    $(".menu-item").on('mouseover',function () {
        $elem = $(this).prev();
        $elem.css("color","white");
    }).on('mouseout',function () {
        $elem.css("color","#a1a1a7");
    });

});