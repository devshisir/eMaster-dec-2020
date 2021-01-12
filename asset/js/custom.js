$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');
    
    $('.dropdown-menu').on('click',function(e){
        e.stopPropagation();
    })


    var auth_modal = new bootstrap.Modal(document.getElementById('signUp_modal'), {
        keyboard: false
    })
    $('.auth_next_modal').on('click',function(){
        auth_modal.hide();
    })

    var auth_modal_mobile = new bootstrap.Modal(document.getElementById('signUp_modal_mobile'), {
        keyboard: false
    })
    $('.opt_popup_btn_action').on('click',function(){
        auth_modal_mobile.hide();
    })


     $('body').on('shown.bs.modal', '#otp_popup_modal', function () {
        $('#digit-1', this).focus();
     })


    // this is form otp 
    $('.digit-group').find('input').each(function() {
        $(this).attr('maxlength', 1);
        $(this).on('keyup', function(e) {
            var parent = $($(this).parent());
            
            if(e.keyCode === 8 || e.keyCode === 37) {
                var prev = parent.find('input#' + $(this).data('previous'));
                
                if(prev.length) {
                    $(prev).select();
                }
            } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                var next = parent.find('input#' + $(this).data('next'));
                
                if(next.length) {
                    $(next).select();
                } else {
                    if(parent.data('autosubmit')) {
                        parent.submit();
                    }
                }
            }
        });
    });
      




    
});