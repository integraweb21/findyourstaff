$(document).ready(function(){

    // Owl Carousel

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navContainer: '#customNav',
        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        dots:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    $('#flexSwitchCheckDefault').click(function(){
        let val = $(this).val();
        //first click
        if(val == 'on'){
            val = 'an';
        }
        if(val == 'mois'){
            $(this).val('an');
            $('.price-m').show();
            $('.price-a').hide();
            $('.month-m').show();
            $('.month-a').hide();
        }else if(val == 'an'){
            $(this).val('mois');
            $('.price-m').hide();
            $('.price-a').show();
            $('.month-m').hide();
            $('.month-a').show();
        }
    });

})