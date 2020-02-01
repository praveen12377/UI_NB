// $(window).on('scroll', function () {
//     if ($(window).scrollTop()) {
//       $('nav').addClass('blackto');
//     } else {
//       $('nav').removeClass('blackto');
//     }
//   });
  

// $('.home-img img').mousemove( function(e){
//     var moveX = (e.pageX * -1/25);
//     var moveY = (e.pageY * -1/25);
//     $(this).css({
//         'transform': 'translate('+ moveX +'px,' + moveY + 'px)'
//     })
// });

// $('.home .home-heading1').mousemove( function(e){
//     var moveX = (e.pageX * -1/25);
//     var moveY = (e.pageY * -1/25);
//     $(this).css({
//         'transform': 'translate('+ moveX +'px,' + moveY + 'px)'
//     })
// });





window.sr = ScrollReveal();

// sr.reveal('.menu-title', {
// 	duration: 2000,
// 	origin: 'left',
// 	distance: '110px',
// 	opacity: 0.3,
// 	delay: 0,
// 	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
// 	// rotate: { x: 0, y: 10, z: 0 },
// });


sr.reveal('.about-box', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.about-bg', {
	duration: 2200,
	origin: 'bottom',
	distance: '500px',
	delay: 140,
	opacity: 0.4,
});


sr.reveal('.about-title', {
	duration: 2400,
	origin: 'bottom',
	distance: '400px',
	viewFactor: 0.01,
	delay: 150,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});


sr.reveal('.about-subtitle', {
	duration: 2600,
	origin: 'bottom',
	distance: '400px',
	// viewFactor: 0.01,
	delay: 160,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});


sr.reveal('.about-content', {
	duration: 2800,
	origin: 'bottom',
	distance: '400px',
	// viewFactor: 0.1,
	delay: 180,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 0, y: 100, z: 0 },
});


sr.reveal('.about-btn', {
	duration: 3000,
	origin: 'left',
	distance: '220px',
	// viewFactor: 0.3,
    delay: 200,
    opacity: 0.7,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});


sr.reveal('.service-title', {
	duration: 2000,
	origin: 'bottom',
	distance: '400px',
	viewFactor: 0.2,
	delay: 80,
	scale: 0.3,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 0, y: 0, z: 90 },
});

sr.reveal('.service-hr', {
	duration: 2000,
	origin: 'left',
	distance: '200px',
	viewFactor: 0.3,
	delay: 100,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.service-box', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	viewFactor: 0.02,
	delay: 100,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.service-bg', {
	duration: 2000,
	origin: 'bottom',
	distance: '300px',
	viewFactor: 0.02,
	delay: 140,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.service-icon', {
	duration: 2500,
	origin: 'left',
	distance: '500px',
	viewFactor: 0.02,
	delay: 100,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('hr', {
	duration: 2500,
	origin: 'left',
	distance: '500px',
	viewFactor: 0.02,
	delay: 100,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.service-content', {
	duration: 2500,
	origin: 'bottom',
	distance: '400px',
	viewFactor: 0.2,
	delay: 85,
	scale: 0.3,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 0, y: 0, z: 90 },
});

sr.reveal('.service-btn', {
	duration: 2500,
	origin: 'left',
	distance: '500px',
	viewFactor: 0.02,
	delay: 100,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.info', {
	duration: 2500,
	origin: 'bottom',
	distance: '500px',
	viewFactor: 0.02,
	delay: 100,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.info-box', {
	duration: 2800,
	origin: 'left',
	distance: '500px',
	viewFactor: 0.02,
	delay: 150,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.work-img', {
	duration: 2000,
	origin: 'left',
	distance: '500px',
	viewFactor: 0.02,
	delay: 100,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.work-title', {
	duration: 2500,
	origin: 'left',
	distance: '300px',
	viewFactor: 0.2,
	delay: 85,
	scale: 0.3,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 0, y: 0, z: 90 },
});

sr.reveal('.line-image', {
	duration: 2500,
	origin: 'left',
	distance: '300px',
	viewFactor: 0.2,
	delay: 85,
	scale: 0.3,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 0, y: 0, z: 90 },
});

sr.reveal('.structure-title', {
	duration: 2500,
	origin: 'left',
	distance: '200px',
	viewFactor: 0.2,
	delay: 85,
	scale: 0.3,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 0, y: 0, z: 90 },
});

sr.reveal('.structure', {
	duration: 2500,
	origin: 'left',
	distance: '300px',
	viewFactor: 0.2,
	delay: 85,
	scale: 0.3,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	rotate: { x: 0, y: 0, z: 90 },
});

sr.reveal('.news-title', {
	duration: 2500,
	origin: 'left',
	distance: '300px',
	viewFactor: 0.2,
	delay: 85,
	scale: 0.3,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 0, y: 0, z: 90 },
});

sr.reveal('.news - title', {
	duration: 2500,
	origin: 'left',
	distance: '300px',
	viewFactor: 0.2,
	delay: 85,
	scale: 0.3,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 0, y: 0, z: 90 },
});

sr.reveal('.locations-title', {
	duration: 2500,
	origin: 'left',
	distance: '300px',
	viewFactor: 0.2,
	delay: 85,
	scale: 0.3,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 0, y: 0, z: 90 },
});

sr.reveal('.va-image-group', {
	duration: 2500,
	origin: 'left',
	distance: '300px',
	viewFactor: 0.2,
	delay: 85,
	scale: 0.3,
});

sr.reveal('.faq-group-cnt', {
	duration: 2500,
	origin: 'left',
	distance: '300px',
	viewFactor: 0.2,
	delay: 100,
	scale: 0.3,
});

sr.reveal('.white-paper-cnt', {
	duration: 2500,
	origin: 'left',
	distance: '400px',
	viewFactor: 0.2,
	delay: 130,
});

sr.reveal('.aboutus-head', {
	duration: 2000,
	origin: 'left',
	distance: '200px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.aboutus-para', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 150,
	opacity: 0,
});

sr.reveal('.unique-group', {
	duration: 1900,
	origin: 'left',
	distance: '200px',
	delay: 150,
	opacity: 0,
});

sr.reveal('.unique-head', {
	duration: 2100,
	origin: 'bottom',
	distance: '400px',
	delay: 180,
	opacity: 0,
});

sr.reveal('.unique-image', {
	duration: 2400,
	origin: 'left',
	distance: '400px',
	delay: 200,
	opacity: 0,
});

sr.reveal('.unique-para', {
	duration: 2400,
	origin: 'left',
	distance: '300px',
	delay: 240,
	opacity: 0,
});

sr.reveal('.mission-header', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 160,
	opacity: 0,
});

sr.reveal('.fa-arrow-right', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 900,
	opacity: 0,
});

sr.reveal('.mission-content', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 500,
	opacity: 0,
});

sr.reveal('.background-challenge', {
	duration: 2200,
	origin: 'left',
	distance: '900px',
	delay: 500,
	opacity: 0,
});

sr.reveal('.aboutus-content', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 160,
	opacity: 0,
});

sr.reveal('.persistently-para', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 160,
	opacity: 0,
});

sr.reveal('.blockchain-head', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 160,
	opacity: 0,
});

sr.reveal('.blockchain-para', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 160,
	opacity: 0,
});

sr.reveal('.tech-head', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 160,
	opacity: 0,
});

sr.reveal('.tech-para', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 400,
	opacity: 0,
});

sr.reveal('.tech-right-div', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 400,
	opacity: 0,
});

sr.reveal('.tech-services-head', {
	duration: 2000,
	origin: 'bottom',
	distance: '400px',
	delay: 400,
	opacity: 0,
});

sr.reveal('.index-image', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 400,
	opacity: 0,
});

sr.reveal('.index-para', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 600,
	opacity: 0,
});

sr.reveal('.assist-box', {
	duration: 2000,
	origin: 'left',
	distance: '900px',
	delay: 600,
	opacity: 0,
});

sr.reveal('.assist-div', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 900,
	opacity: 0,
});

sr.reveal('.assist-para', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 900,
	opacity: 0,
});

sr.reveal('.background-img', {
	duration: 2000,
	origin: 'bottom',
	distance: '300px',
	delay: 900,
	opacity: 0,
});

sr.reveal('.software-header', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 160,
	opacity: 0,
});

sr.reveal('.software-content', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 160,
	opacity: 0,
});

sr.reveal('.secure-header', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 160,
	opacity: 0,
});

sr.reveal('.mobileapp-head', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 160,
	opacity: 0,
});

sr.reveal('.mobileapp-subtext', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 160,
	opacity: 0,
});

sr.reveal('.mobile-env-sec-head', {
	duration: 2000,
	origin: 'bottom',
	distance: '400px',
	delay: 160,
	opacity: 0,
});

sr.reveal('.mobile-first-image', {
	duration: 2000,
	origin: 'left',
	distance: '500px',
	delay: 260,
	opacity: 0,
});

sr.reveal('.mobile-first-head', {
	duration: 2000,
	origin: 'left',
	distance: '500px',
	delay: 360,
	opacity: 0,
});

sr.reveal('.our-experts-head', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 160,
	opacity: 0,
});

sr.reveal('.our-expert-sec-icons', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 200,
	opacity: 0,
});

sr.reveal('.our-expert-sec-text', {
	duration: 2500,
	origin: 'left',
	distance: '400px',
	delay: 300,
	opacity: 0,
});

sr.reveal('.our-expert-sec-subtext', {
	duration: 2700,
	origin: 'left',
	distance: '400px',
	delay: 400,
	opacity: 0,
});


// IT

sr.reveal('.it-head-1', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.it-subtext', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 400,
	opacity: 0,
});

sr.reveal('.it-subtext-1', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 400,
	opacity: 0,
});

sr.reveal('.it-banner2-text', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.help-you-head', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.help-you-text', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 400,
	opacity: 0,
});

sr.reveal('.it-bottom-image', {
	duration: 2000,
	origin: 'bottom',
	distance: '300px',
	delay: 100,
	opacity: 0,
});

// DevOps Solutions

sr.reveal('.solutions-head', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.solutions-para', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 400,
	opacity: 0,
});

sr.reveal('.footer-quort', {
	duration: 2000,
	origin: 'bottom',
	distance: '300px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.address-cnt-footer', {
	duration: 2200,
	origin: 'left',
	distance: '600px',
	delay: 400,
	opacity: 0,
});

sr.reveal('.footer-social-icon-1', {
	duration: 2000,
	origin: 'left',
	distance: '200px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.footer-social-icon-2', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 200,
	opacity: 0,
});

sr.reveal('.footer-social-icon-3', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 300,
	opacity: 0,
});

sr.reveal('.footer-social-icon-4', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 300,
	opacity: 0,
});

sr.reveal('.footer-social-icon-5', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 400,
	opacity: 0,
});

sr.reveal('.footer-social-icon-6', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 500,
	opacity: 0,
});

sr.reveal('.footer-social-icon-7', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 600,
	opacity: 0,
});

// Business Outsourcing

sr.reveal('.outsourcing-head', {
	duration: 2000,
	origin: 'bottom',
	distance: '300px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.outsourcing-para', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.needs-head', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.support-image', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.support-head', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.support-para', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 200,
	opacity: 0,
});

// CHAKRAVUYHA AGROTECH

sr.reveal('.agrotech-header', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 200,
	opacity: 0,
});

sr.reveal('.agrotech-content', {
	duration: 2000,
	origin: 'left',
	distance: '500px',
	delay: 300,
	opacity: 0,
});

sr.reveal('.globle-market-header', {
	duration: 2000,
	origin: 'left',
	distance: '500px',
	delay: 300,
	opacity: 0,
});

sr.reveal('.revenue-content', {
	duration: 2000,
	origin: 'left',
	distance: '500px',
	delay: 300,
	opacity: 0,
});

sr.reveal('.revenue-amount', {
	duration: 2000,
	origin: 'left',
	distance: '500px',
	delay: 300,
	opacity: 0,
});

sr.reveal('.different-sales', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 300,
	opacity: 0,
});

sr.reveal('.sale-content', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 300,
	opacity: 0,
});

sr.reveal('.distress-sale', {
	duration: 2000,
	origin: 'left',
	distance: '400px',
	delay: 300,
	opacity: 0,
});

// events

sr.reveal('.ourstory-img', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 200,
	opacity: 0,
});

sr.reveal('.cio-review', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 200,
	opacity: 0,
});

sr.reveal('.cio-content', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 200,
	opacity: 0,
});

sr.reveal('.cio-website', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 200,
	opacity: 0,
});

sr.reveal('.participated-img', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 200,
	opacity: 0,
});

sr.reveal('.cststory-img', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 200,
	opacity: 0,
});

sr.reveal('.participated-img', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 200,
	opacity: 0,
});

// Contact Us

sr.reveal('.contact-us-title', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 200,
	opacity: 0,
});

sr.reveal('.contact-content', {
	duration: 2000,
	origin: 'left',
	distance: '300px',
	delay: 200,
	opacity: 0,
});

sr.reveal('.contact-input', {
	duration: 2000,
	origin: 'left',
	distance: '200px',
	delay: 200,
	opacity: 0,
});

sr.reveal('.contact-label', {
	duration: 2000,
	origin: 'bottom',
	distance: '200px',
	delay: 200,
	opacity: 0,
});

sr.reveal('.contact-btn', {
	duration: 2000,
	origin: 'left',
	distance: '200px',
	delay: 200,
	opacity: 0,
});