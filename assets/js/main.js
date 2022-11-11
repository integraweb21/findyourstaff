$(document).ready(function(){

    // Owl Carousel

    var owl = $('.owl-carousel');
        owl.owlCarousel({
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                520:{
                    items:3
                },
                768:{
                    items:5
                },
                992:{
                    items:7
                }
            }
        });
        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
    })

})