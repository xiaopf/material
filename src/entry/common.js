$(document).ready(function(){
    // let pathname = window.location.pathname;
    // let pathArr = pathname.split('/');
    // let keypath;

    // if (!pathArr[0]) {
    //     keypath = pathArr[pathArr.length - 2];
    // } else {
    //     keypath = pathArr[pathArr.length - 1];
    // }

    // console.log(keypath)
    // $('.' + keypath).addClass('active');

    // let aboutUs = ['news', 'events', 'teams', 'careers', 'newsDetail'];
    // let experience = ['caseStudies'];

    // if (aboutUs.indexOf(keypath) > -1) {
    //     $('.aboutUs').addClass('active');
    // }
    // if (experience.indexOf(keypath) > -1) {
    //     $('.experience').addClass('active');
    // }


    // tab
    $('.page_tab_nav li').click(function () {
        $('.page_tab_nav li').removeClass('active');
        $('.page_tab_content li').removeClass('active')
        
        let index = $('.page_tab_nav li').index(this);
        $('.page_tab_content>li').eq(index).addClass('active')
        $(this).addClass('active');
    })
})