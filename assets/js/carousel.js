// Home Page 1 

$(function () {
    var owl = $('.services-con .owl-carousel');

    function initializeCarousel(marginValue) {
        owl.owlCarousel('destroy'); // Destroy existing instance if any
        owl.owlCarousel({
            margin: marginValue,
            nav: false,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4500,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    function adjustMargin() {
        if (window.innerWidth <= 1200) {
            initializeCarousel(15);
        } else if (window.innerWidth <= 991) {
            initializeCarousel(20);
        } else {
            initializeCarousel(30); // Default margin for larger screens
        }
    }

    // Initial call to set the correct margin
    adjustMargin();

    // Adjust carousel on window resize
    $(window).on('resize', function () {
        adjustMargin();
    });
});



$(function () {
    var owl = $('.testimonials-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 6500,
        navText: [
            "<img src='./assets/images/left-white-arrow.png' alt='Previous' class='nav-arrow'>",
            "<img src='./assets/images/right-white-arrow.png' alt='Next' class='nav-arrow'>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })
})
$(function () {
    var owl = $('.news-and-articles-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        navText: [
            "<img src='./assets/images/left-arrow.png' alt='Previous' class='nav-arrow'>",
            "<img src='./assets/images/right-arrow.png' alt='Next' class='nav-arrow'>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
})

// PHOTOSLIDER SECTION
$(function () {
    var owl = $('.photo-slider-con .owl-carousel');

    function initializeCarousel(marginValue) {
        owl.owlCarousel('destroy'); // Destroy existing instance if any
        owl.owlCarousel({
            margin: marginValue,
            nav: false,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 6000,
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });
    }

    function adjustMargin() {
        if (window.innerWidth <= 1200) {
            initializeCarousel(15);
        } else if (window.innerWidth <= 991) {
            initializeCarousel(20);
        } else {
            initializeCarousel(30); // Default margin for larger screens
        }
    }

    // Initial call to set the correct margin
    adjustMargin();

    // Adjust carousel on window resize
    $(window).on('resize', function () {
        adjustMargin();
    });
});

$(function () {
    var owl = $('.pricing-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        navText: [
            "<img src='./assets/images/left-white-arrow.png' alt='Previous' class='nav-arrow'>",
            "<img src='./assets/images/right-white-arrow.png' alt='Next' class='nav-arrow'>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
})