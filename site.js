$(document).ready(function() {
    $(".link-button").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    }); 
     
    $('input').blur(function() {
        if($(this).val()) {
            $(this).css('border-bottom', '2.5px solid #FED434');
        } else {
            $(this).css('border-bottom', '2.5px solid rgba(0,0,0,0.1)');
        }
    })
})