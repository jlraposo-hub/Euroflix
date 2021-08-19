$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        //600px ou menos, apresenta 3 itens
        600:{
            items:3
        },
        //100px ou mais, 5 itens por página
        1000:{
            items:5
        }
    }
})