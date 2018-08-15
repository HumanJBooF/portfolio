$(function () {

    $('.collapsible').collapsible()
    $('.slider').slider();
    $('.scrollspy').scrollSpy({
        scrollOffset: 100
    });
    $('.parallax').parallax();
    $('.sidenav').sidenav({
        draggable: true
    });
    $('.tooltipped').tooltip();
//typed.js objects
    let options = {
        strings: ["Welcome to my page! <br> I am a Web Developer <br>Come check out my work..."],
        typeSpeed: 60,
        loop: true,
        contentType: 'html',
        showCursor: true,
        cursorChar: '|',
        startDelay: 1000,
        backSpeed: 20,
        backDelay: 5000
    }
    
    let options1 = {
        strings: ["Languages, Frameworks & Tools"],
        typeSpeed: 60,
        loop: true,
        contentType: 'html',
        showCursor: true,
        cursorChar: '|',
        startDelay: 2000,
    }
//typed.js grab each element
    let typed = new Typed(".typed", options);
    let typed1 = new Typed(".typed1", options1)
   
    AOS.init({
        duration: 1500,
        mirror: false,
    });

})