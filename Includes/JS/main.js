$(document).ready(function(){
    $('nav ul li.menu, section.menu ul li.close').click(function(){
        $('body').toggleClass('showMenu');
    });
});
