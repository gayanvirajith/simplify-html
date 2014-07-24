$(document).ready(function(){

    //open-close submenu on mobile
    $('.wc-main-nav').on('click', function(event){
        if($(event.target).is('.wc-main-nav')) $(this).children('ul').toggleClass('is-visible');
    });
});
