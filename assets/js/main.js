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
    })

})