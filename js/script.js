window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav_list'),
    menuItem = document.querySelectorAll('.nav_list_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav_list_active');
        });
    });

    //smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('ul.homes_catalog').on('click', 'li:not(.homes_item_active)', function() {
        $(this)
          .addClass('homes_item_active').siblings().removeClass('homes_item_active')
          .closest('div.container_home').find('div.common_block').removeClass('common_block_active').eq($(this).index()).addClass('common_block_active');
    });

    //validate form

    function validateForms(form) {
        $('form').validate({
            rules: {
                name: "required",
                tel: "required",
                text: "required",
                checkbox: "required"
            },
            messages: {
                name: "* Введите имя",
                tel: "* Введите телефон",
                text: "* Введите текст",
                checkbox: "* Подтвердите согласие"
            }
        });
    };  
    validateForms('#cont_form');  

    $("input[name=tel]").mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('form').trigger('reset');
        });
        return false;
    });

    new WOW().init();

});

   

