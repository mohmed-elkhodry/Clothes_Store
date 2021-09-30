/* public $, document*/
$(document).ready(function () {
    "use strict";
    $(".quatity").delegate(".fa-plus-square", "click", function () {
        var hh = parseInt($(this).parent().clone().children().remove().end().text());
        hh = hh + 1;
        $(this).parent().html("<i class='fas fa-minus-square main-color fa-lg'></i>" + hh + "<i class='fas fa-plus-square main-color fa-lg'></i>");
        updatePrice();
        console.log($(this).parent().siblings(".total"));  
        
        
    });
    $(".quatity").delegate(".fa-minus-square", "click", function () {
        var hh = parseInt($(this).parent().clone().children().remove().end().text());
        if (hh > 1) {
            hh = hh - 1;
            $(this).parent().html("<i class='fas fa-minus-square main-color fa-lg'></i>" + hh + "<i class='fas fa-plus-square main-color fa-lg'></i>");
        }
    });
    
    function updatePrice () {
       
    }
    
    $(document).scroll(function () {
        console.log($(this).scrollTop());
        if($(this).scrollTop() > 300){
            $(".asset-div").fadeOut(500);
        }
        if($(this).scrollTop() < 300){
            $(".asset-div").fadeIn(500);
        }
    });
});