// ****************** animation project section ******************//
var controller = new ScrollMagic.Controller();

var tl = new TimelineMax();
tl.from("#project h2", 0.5,{y:100, opacity:0});
tl.from("#project .pro-p", 0.5,{y:100, opacity:0});
tl.from("#project .newproject1", 0.8,{scale: 0.8, opacity:0, delay:0, ease: Sine.easeIn});
tl.from("#project .btn", 0.5,{y:100, opacity:0});

var scene = new ScrollMagic.Scene({
    triggerElement:"#project",
})

// .setPin("#project")
.setTween(tl)
.addTo(controller);


// ****************** animation banner section ******************//

var tl1 = new TimelineMax();
tl1.from("#banner1 h1", 0.5,{y:100, opacity:0});
tl1.from("#banner1 p", 0.5,{y:100, opacity:0});
tl1.from(".nav .btn", 0.5,{opacity:0});
// tl1.from("#project .newproject1", 0.8,{scale: 0.8, opacity:0, delay:0, ease: Sine.easeIn});

var scene = new ScrollMagic.Scene({
    triggerElement:"#banner",
})

// .setPin("#project")
.setTween(tl1)
.addTo(controller);


// ****************** animation client section ******************//

var tl2 = new TimelineMax();
tl2.from("#client", 0.8,{ scale: 0.8, delay:0, ease: Sine.easeIn});
tl2.from("#client h2", 0.5,{y:100, opacity:0});
tl2.from("#client p", 0.5,{y:100, opacity:0});
tl2.from("#client .clientlogo", 0.8,{ opacity:0, delay:0, ease: Sine.easeIn});

var scene = new ScrollMagic.Scene({
    triggerElement:"#client", offset:-200
})

// .setPin("#project")
.setTween(tl2)
.addTo(controller);



// ****************** animation things section ******************//

var tl3 = new TimelineMax();
tl3.from("#things h2", 0.5,{y:100, opacity:0});
tl3.from("#things p", 0.5,{y:100, opacity:0});
tl3.from("#things .btn", 0.5,{y:100, opacity:0});
tl3.from("#things img", 0.8,{scale: 0.8, opacity:0, delay:0, ease: Sine.easeIn});

var scene = new ScrollMagic.Scene({
    triggerElement:"#things",
})

// .setPin("#project")
.setTween(tl3)
.addTo(controller);



// ****************** animation story section ******************//

var tl4 = new TimelineMax();

tl4.from("#story", 0.8,{ scale: 0.8, delay:0, ease: Sine.easeIn});
tl4.from("#story h2", 0.5,{y:100, opacity:0});
tl4.from("#story p", 0.5,{y:100, opacity:0});
tl4.from("#story .btn", 0.5,{y:100, opacity:0});


var scene = new ScrollMagic.Scene({
    triggerElement:"#story", offset: -203
})

// .setPin("#project")
.setTween(tl4)
.addTo(controller);



// ****************** animation testimonial section ******************//

var tl5 = new TimelineMax();
tl5.from("#testimonial h2", 0.5,{y:100, opacity:0});
tl5.from("#testimonial p", 0.5,{y:100, opacity:0});
tl5.from("#testimonial img, #testimonial h5, #testimonial h6", 0.5,{y:100, opacity:0});
// tl4.from("#story", 0.8,{ backgroundSize:"100% 100%", opacity:0, delay:0, ease: Sine.easeIn});

var scene = new ScrollMagic.Scene({
    triggerElement:"#testimonial",
})

// .setPin("#project")
.setTween(tl5)
.addTo(controller);



// ****************** animation testimonial section ******************//

var tl6 = new TimelineMax();
tl6.from("#insights h2", 0.5,{y:100, opacity:0});
tl6.from("#insights .insightsub", 0.5,{y:100, opacity:0});
tl6.from("#insights .btn", 0.5,{y:100, opacity:0});
tl6.from("#insights img", 0.5,{scale: 0.8, opacity:0, opacity:0});
// tl4.from("#story", 0.8,{ backgroundSize:"100% 100%", opacity:0, delay:0, ease: Sine.easeIn});

var scene = new ScrollMagic.Scene({
    triggerElement:"#insights",
})

// .setPin("#project")
.setTween(tl6)
.addTo(controller);