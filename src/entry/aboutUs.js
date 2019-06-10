$(document).ready(function(){
    $('.page_tab_nav li').click(function () {
        $('.page_tab_nav li').removeClass('active');
        $('.page_tab_content li').removeClass('active')
        
        let index = $('.page_tab_nav li').index(this);
        $('.page_tab_content li').eq(index).addClass('active')
        $(this).addClass('active');
    })
})