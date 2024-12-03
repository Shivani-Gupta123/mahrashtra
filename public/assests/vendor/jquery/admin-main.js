function padZeros(str, len){
    return Array(len-String(str).length+1).join('0')+str;
}

function showmydboxdata(id, Status, type, msg) {
    $('.dilog_message').text(msg);
    $('#delete-data-modal input[name="data_id"]').val(id);
    $('#delete-data-modal input[name="data_status"]').val(Status);
    $('#delete-data-modal input[name="method_type"]').val(type);
    $('#delete-data-modal').modal('show');
    $('#delete-data-modal .confirmbutton').html(type);
    $('#delete-data-modal .confirmbutton').css('textTransform', 'capitalize');
}

var spinner = $('#loader');
$.validator.addMethod('filesize', function (value, element, param) {
    return this.optional(element) || (element.files[0].size <= param)
}, 'File size must be less than {0}');
$.validator.addMethod("wordcount", function (value, element, wordCount) {
    // allow any non-whitespace characters as the host part
    return value.split(' ').length <= wordCount;
}, 'Word count must be lessthen or equal to 100 word .');

function notifyalert(msg, msg_status) {
    alert(msg_status);
}
function goBack() {
    window.history.back();
}
var spinner = $('#loader');
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
     $('.skitter').skitter({
         label: false, 
         numbers: false, 
         //fullscreen: true,         
         theme: 'square'
     });
    $(".dateymd").datepicker({
        format: 'dd-mm-yyyy',
        changeMonth: true,
        changeYear: true
    });

    $(document).ready(function () {

        $('#drawTable').DataTable({
            dom: 'Bfrtip',
            "scrollX": true,
            buttons: ['excel', 'pdf', 'copy'],
            "oLanguage": {
                "sSearch": "Search all columns:"
            },
            "aLengthMenu": [[19, 38, 57, -1], [19, 88, 57, "All"]],
            "pageLength": 19,
            "bJQueryUI": true,
            "sPaginationType": "full_numbers",
            "bFilter": true,
        });

    });
  
    $("#login_form").validate({
        rules: {
            user_email: {
                required: true,
                email: true
            },
            user_password: {
                required: true
            }
        },
        messages: {
            user_email: {
                required: "Please provide a valid email.",
                email: "Please provide a valid email."
            },
            user_password: {
                required: "Please provide a password."
            }
        }
    });

    $(".confirmbutton").on('click', function () {
        var data_id = $('#delete-data-modal input[name="data_id"]').val();
        var data_status = $('#delete-data-modal input[name="data_status"]').val();
        var method_type = $('#delete-data-modal input[name="method_type"]').val();
        $('#delete-data-modal').modal('hide');
        var urlaction = $(this).attr("btaction");
        $.ajax({
            type: "POST",
            url: urlaction,
            data: {data_id: data_id, data_status: data_status, method_type: method_type},
            success: function (res) {
                var obj = jQuery.parseJSON(res);
                var error = obj.response_code;
                var response_data = obj.response_data;
                var msg = obj.response_msg;
                var msg_status = 'error';
                if (error == '200') {
                    msg_status = 'success';
                    $("#tf_list_row_" + response_data).remove();
                }
                notifyalert(msg, msg_status);
            }
        });
    });
    $('.close').click(function () {
        $('.offcanvas-collapse').removeClass('show');
    });
    $('.footer-list h5').click(function () {
        var mobView = $(this).siblings('ul, h5+div');
        $(mobView).removeClass('active');
        $(this).next().addClass('active');

        $('.close').click(function () {
            $(mobView).removeClass('active');
        });
    });
//    $('.counterA').counterUp({
//    delay: 10,
//    time: 2000,
//    padLength: $('.counterA').text().length
//});
    
})(jQuery);