$(document).ready(function () {
    $(".owl-two").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        center: true
    });
    
    
    $(".owl-three").owlCarousel({
        items: 3,
        autoplayHoverPause: true,
        loop: true,
        center: true,
        
        
                
        
            responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        575:{
            items:2,
            nav:false
        },
        768:{
            items:3,
            nav:false
        },
        
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
    });
    
    $("#owl-one").owlCarousel({
        items: 5,
        loop: true,
        autoplay:  true,
        autoplayHoverPause:true,
        center: true,
        dots: false,
        
        
            responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        575:{
            items:3,
            nav:false
        },
        768:{
            items:4,
            nav:false
        },
        
        1000:{
            items:5,
            nav:false,
            loop:true
        }
    }
    });
})
