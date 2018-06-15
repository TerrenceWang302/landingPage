$(document).ready(function(){
    showMenu();
    $('nav').localScroll();
    $('.toTop').localScroll();
    backToTop();
    
    function showMenu() {
        const button = $('.area'),
              menu = $('nav');
        button.on('click', toggleMenu);
        
        function toggleMenu() {
            if(button.hasClass('change')) {
                button.removeClass('change');
                button.addClass('back');
                menu.animate({
                    opacity: 0,
                    width: '30%'
                }, 700, function(){
                    menu.css('display', 'none');
                });
            } else {
                button.removeClass('back');
                button.addClass('change');
                menu.css('display', 'block');
                menu.animate({
                    opacity: 1,
                    width: '100%'
                }, 700);
            }
        }
        
        menu.on('click', function(){
            button.removeClass('change');
            button.addClass('back');
            menu.animate({
                opacity: 0,
                width: '30%'
            }, 700, function(){
                menu.css('display', 'none');
            });
        });
    }
    
    function backToTop() {
        const bToTopBtn = $('.toTop'),
              trigger = 100, // px
              btToTop = function() {
                  let top = $(window).scrollTop();
                  if(top > trigger) {
                      bToTopBtn.addClass('show');
                  } else {
                      bToTopBtn.removeClass('show');
                  }
              };
        $(window).scroll(btToTop);
    }
});