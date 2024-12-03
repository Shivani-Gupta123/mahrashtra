var spinner = $('#loader');
$.validator.addMethod('filesize', function (value, element, param) {
    return this.optional(element) || (element.files[0].size <= param)
}, 'File size must be less than {0}');
$.validator.addMethod("wordcount", function (value, element, wordCount) {
    // allow any non-whitespace characters as the host part
    return value.split(' ').length <= wordCount;
}, 'Word count must be lessthen or equal to 100 word .');
!(function ($) {
    "use strict";
    // Preloader
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });
    // Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });

// make it as accordion for smaller screens
    if ($(window).width() < 992) {
        $('.dropdown-menu a').click(function (e) {
            e.preventDefault();
            if ($(this).next('.submenu').length) {
                $(this).next('.submenu').toggle();
            }
            $('.dropdown').on('hide.bs.dropdown', function () {
                $(this).find('.submenu').hide();
            })
        });
    }




    //spinner.show();
    $(document).ready(function () {
        $('#example').DataTable({
            "scrollX": true
        });
    });
      $('.close').click(function(){
            $('.offcanvas-collapse').removeClass('show');
        });
    
      $('.footer-list h5').click(function(){
          var mobView = $(this).siblings('ul, h5+div');
          $(mobView).removeClass('active');
          $(this).next().addClass('active');
          
            $('.close').click(function(){
                $(mobView).removeClass('active');
            });
      });
    /*$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
     if (!$(this).next().hasClass('show')) {
     $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
     }
     var $subMenu = $(this).next(".dropdown-menu");
     $subMenu.toggleClass('show');
     
     
     $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
     $('.dropdown-submenu .show').removeClass("show");
     });
     
     
     return false;
     });*/
    
})(jQuery);
$('.search-filter').on("change", function () {
    //alert('hello');
        $("#myBtnContainer").submit();
    });
function counterTime(date_time) {

// Set the date we're counting down to
    var countDownDate = new Date(date_time).getTime();

// Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
       if(days > 0){
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";
    }else{
         document.getElementById("demo").innerHTML =  + ((hours < 9)? 0+hours: hours) + ":"
                + ((minutes < 9)? 0+minutes: minutes) + ":" + ((seconds < 9)? 0+seconds: seconds) + ":";
    }


        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

}    