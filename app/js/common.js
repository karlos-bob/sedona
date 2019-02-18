$(function() {
    "use strict";
    // Custom JS

    var isActive = false;

    $('.header__burgerIcon').on('click', function () {
        if(isActive) {
            $(this).removeClass('active');
            $('.allPageWrapper').removeClass('menu-open');
        } else {
            $(this).addClass('active');
            $('.allPageWrapper').addClass('menu-open');
        }
        isActive = !isActive;
    })

});  
