$(function () {
    $('.popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

// $(function () {
//     $('.popup-video').magnificPopup({
//         type: 'iframe',
//         mainClass: 'mfp-fade',
//         removalDelay: 160,
//         preloader: false,
//         fixedContentPos: false,
//         iframe: {
//             patterns: {
//                 youtube: {
//                     index: 'youtube.com/',
//                     id: 'v=',
//                     src: 'https://www.youtube.com/embed/%id%?autoplay=1&rel=0&modestbranding=1'
//                 },
//                 vimeo: {
//                     index: 'vimeo.com/',
//                     id: '/',
//                     src: 'https://player.vimeo.com/video/%id%?autoplay=1'
//                 }
//             }
//         }
//     });
// });