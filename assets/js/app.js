$(function () {

    
    $('.scrollspy').scrollSpy({
        scrollOffset: 100
    });
    $('.parallax').parallax();
    $('.sidenav').sidenav({
        draggable: true
    });

    //typed.js objects
    let options = {
        strings: ["Welcome to my page! <br> I am a Web Developer <br>Come check out my work..."],
        typeSpeed: 60,
        loop: true,
        contentType: 'html',
        showCursor: true,
        cursorChar: '_',
        startDelay: 1000,
        backSpeed: 20,
        backDelay: 3500
    }

    //typed.js grab each element
    let typed = new Typed(".typed", options);
    

    AOS.init({
        duration: 1500,
        mirror: false,
    });

})