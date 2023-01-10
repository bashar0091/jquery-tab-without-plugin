$( document ).ready(function() {
    
    // click on menu 
    $('.tab-menu ul li').click(function() {
        // get item of tabmenu list and tab item content
        var tabmenu = $(this).attr('id');
        var tabitem = $('.tab-item');

        // tab active 
        $('.tab-menu ul li').removeClass('active');
        $(this).addClass('active');
        
        // tabitem content show hide
        if(tabmenu == "all") {
            tabitem.show();
        } else {
            tabitem.hide();
            $('.tab-item.' + tabmenu).show();
        }
    });

});