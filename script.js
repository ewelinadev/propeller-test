
$( document ).ready(function() {

    var slideIndex = 0;
    var slidesNumber= $('#slider li').length;
    const ANIMATION_DELAY=4000;


    slide();


    $( '.mobile-menu span' ).click(function() {

        $('header nav').toggleClass("main-menu-expanded");

    });



    function slide() {

        $('#indicator li').each(function (index, element) {
            if (index == slideIndex) {
                element.className = "active";
            }
            else {
                element.className = "pagination";

            }


        });

        $('#slider li').each(function (index, element) {
            if (index == slideIndex) {
                element.style.display = "block";

            }
            else {
                element.style.display = "none"

            }

        });

        slideIndex++;

        setTimeout(slide, ANIMATION_DELAY);

        if (slideIndex > slidesNumber-1) {slideIndex = 0}
    }
    $('header nav ul li').click(function(){
        $('header nav').attr("class","main-menu");
    })
});

