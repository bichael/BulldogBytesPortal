$(document).ready(function () {
    $('#links').click(function () {
        $("#ul1").slideDown();
        $("#ul2").slideUp();
        $("#ul3").slideUp();
        $("#ul4").slideUp();
        $("#ul5").slideUp();
    });

    $('#re').click(function () {
        $("#ul2").slideDown();
        $("#ul1").slideUp();
        $("#ul3").slideUp();
        $("#ul4").slideUp();
        $("#ul5").slideUp();
    });

    $('#state').click(function () {
        $("#ul3").slideDown();
        $("#ul1").slideUp();
        $("#ul2").slideUp();
        $("#ul4").slideUp();
        $("#ul5").slideUp();
    });

    $('#saved').click(function () {
        $("#ul4").slideDown();
        $("#ul1").slideUp();
        $("#ul2").slideUp();
        $("#ul3").slideUp();
        $("#ul5").slideUp();
    });

    $('#faq').click(function () {
        $("#ul5").slideDown();
        $("#ul1").slideUp();
        $("#ul2").slideUp();
        $("#ul3").slideUp();
        $("#ul4").slideUp();
    });
});