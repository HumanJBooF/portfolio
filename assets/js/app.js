$(function () {

    $(".dropdown-trigger").dropdown();
    $('.tabs').tabs();
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $('.sidenav').sidenav({
        draggable: true
    });
    $('.tooltipped').tooltip();

    let options = {
        strings: ["I am a... <br> Web Developer <br> Check out my work..."],
        typeSpeed: 70,
        loop: false,
        contentType: 'html',
        showCursor: true,
        cursorChar: '|',
        startDelay: 1000,
    }

    let typed = new Typed(".typed", options);
  
   
    AOS.init({
        duration: 1500,
        mirror: false,
    });

})