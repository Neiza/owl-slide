
$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 7,
    dots: false,
    nav: true,
    navText: ['<img src="assets/img/flecha1.png">', '<img src="assets/img/flecha2.png">'],
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})
