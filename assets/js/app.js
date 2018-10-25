$(function () {

    // const $one = $('.one');
    // const $two = $('.two');
    // const $btn = $('.btn-large');
    // const $pop = $('.pop');

    // $one.hide();
    // $two.hide();

    // const tech = ['ES6', 'Css3', 'SQL', 'NoSql', 'MySql',
    //     'Sequelize', 'MongoDB', 'Materialize',
    //     'Bootstrap'];

    // const tech1 = ['Docker', 'Vagrant', 'Shell-Script',
    //     'Handlebars', 'Virtualization',
    //     'Command Line', 'VS Code', 'NPM/Yarn', 'Git'];

    // tech.forEach(name => {
    //     const $li = $(`<li class='collection-item itemsOne'>`)
    //     $li.append(name);
    //     $one.append($li);
    // });

    // tech1.forEach(name => {
    //     const $li = $(`<li class='collection-item itemsTwo'>`)
    //     $li.append(name);
    //     $two.append($li);
    // });

    // $btn.on('click', () => {
    //     $pop.fadeOut(() => {
    //         $one.fadeIn(1000);
    //         $two.fadeIn(1000);
    //     });
    // })

    //materialize init
    $('.scrollspy').scrollSpy({
        scrollOffset: 100
    });
    $('.parallax').parallax();
    $('.sidenav').sidenav({
        draggable: true
    });
    $('.collapsible').collapsible();

    //typed.js objects
    const options = {
        strings: ["Welcome to my page! <br> I am a Full Stack Developer <br>Come check out my work..."],
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
    const typed = new Typed(".typed", options);


    AOS.init({
        duration: 1500,
        mirror: false,
    });

})