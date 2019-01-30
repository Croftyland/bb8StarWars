// var tl = new TimelineMax({
//     repeat:-1
// });
//
// TweenMax.set("#bb8-body", {
//     transformOrigin:"50% 50%"
// });
//
// tl.to("#bb8-body",1, {rotation:"+=720"});
let tl = new TimelineMax({
    repeat: -1
});


// let tlLoader = new TimelineMax({repeat: 2, onComplete: loadContent});
// let frame = document.getElementById("frame")
// let loader = document.getElementById("loader");
// let dot = document.getElementsByClassName("dot");
let bb8Body = document.getElementById("bb8-body");
let bb8Shadow = document.getElementById("bb8-shadow");
let bb8Head = document.getElementById("bb8-head");
let buttons = document.getElementById("button");
let mountainS = document.getElementById("mountain1");
let mountainM = document.getElementById("mountain2");
let mountainL = document.getElementById("mountain3");
let mountainSm = document.getElementById("mountain4");
let mountainMd = document.getElementById("mountain5");
let mountainLg = document.getElementById("mountain6");
let earth1 = document.getElementById("earth");
let earth2 = document.getElementById("earth2");
let earth3 = document.getElementById("earth3");
let earth4 = document.getElementById("earth4");
let middle = document.getElementById("middle");

// TweenMax.to(mountain, 2, {autoAlpha: 0});
//
// tl
//     .to(frame, 8, {scale:3, force3D:false})
document.getElementById("btnPlay").addEventListener("click", function () {
    tl.play();
    animTl.play()
});
document.getElementById("btnPause").addEventListener("click", function () {
    tl.pause();
    animTl.pause();
});
document.getElementById("btnResume").addEventListener("click", function () {
    tl.resume();
    animTl.resume();
});
document.getElementById("btnReverse").addEventListener("click", function () {
    tl.reverse();
    animTl.reverse();
});
document.getElementById("btnSlowDown").addEventListener("click", function () {
    tl.timeScale(0.5);
    animTl.timeScale(0.5);
});
document.getElementById("btnSpeedUp").addEventListener("click", function () {
    tl.timeScale(5);
    animTl.timeScale(5);
});


tl.staggerFrom(".buttons", 1, {
    cycle: {
        x: [50, -50],
        scale: [0.5, 1]
    }, autoAlpha: 0, ease: Power1.easeOut
}, 0.5);
// tlLoader
//     .straggerFromTo(dot, 0.3,
//         {y: 0, autoAlpha: 0},
//         {y: 20, autoAlpha: 1, ease: Power0.easeInOut}, 0.05)
//     .fromTo(loader, 0.3,
//         {autoAlpha: 1, scale: 1.3},
//         {autoAlpha: 0, scale: 1, ease: Power0.easeNone},
//         0.9);
//
// function loadContent() {
//     let tLoaderOut = new TimelineLite({onComplete: contentIn});
//     tLoaderOut
//         .set(dot, {backgroundColor: "#2b4d66"})
//         .to(loader, .3, {autoAlpha: 1, scale: 1.3, ease: Power0.easeNone})
//         .staggerFromTo(dot, .3,
//             {y: 0, autoAlpha: 0},
//             {y: 20, autoAlpha: 1, ease: Back.easeInOut}, .05, 0)
//         .to(i, .3, {y: -150, autoAlpha: 0, ease: Back.easeIn}, "+=0.3")
//
//
//     function contentIn() {
//         tl.play()
//     }
//
//
// }

tl.to(bb8Shadow, 0.5, {scale: 1.2, repeat: -1, yoyo: true, ease: Linear.easeNone});
tl
    .set(bb8Body, {
        transformOrigin: "50% 50%"
    })
    .to(bb8Body, 1, {
        css:
            {
                rotation: -360
            },
        // remove default easing for seamless loop
        ease: Linear.easeNone,
        repeat: -1,
        paused: false
    })

// TweenMax.to(bb8Head, 20, {
//     bezier:{
//         type:"soft",
//         values:[{x:100, y:300}, {x:200, y:30}, {x:300, y:150}, {x:400, y:10}, {x:600, y:200}],
//         autoRotate:true
//     }, force3D:true});

let animTl = new TimelineMax({repeat: -1});
let tween1 = (TweenLite.to(bb8Head, 1, {
    rotation: 30,
    x: 240,
    y: 130,
    transformOrigin: "center",
    ease: new SlowMo(0.5, 0.8),
    yoyo: true
}))
let tween2 = (TweenLite.to(bb8Head, 1, {
    rotation: 0,
    x: 10,
    y: 0,
    transformOrigin: "center",
    ease: Power3.easeInOut,
    yoyo: true,
}))
let tween3 = (TweenLite.to(bb8Head, 1, {
    rotation: -20,
    x: -200,
    y: 30,
    transformOrigin: "center",
    ease: Bounce.easeOut,
    yoyo: true,
}))
let tween4 = (TweenLite.to(bb8Head, 1, {
    rotation: 0,
    x: 10,
    y: 0,
    transformOrigin: "center",
    ease: Power3.easeInOut,
    yoyo: true,
}))

animTl.add([tween1, tween2, tween3, tween4], "+=1", "sequence", 0.5);

// .to(bb8Head, 0.1, {rotation: -20, transformOrigin: "center"}, "bb8-in =+0.3")
// .to(bb8Head, 0.1, {rotation: 20, transformOrigin: "center"}, "bb8-in =+1")
// .to(bb8Head, 3, {rotation: -15, transformOrigin: "center", ease: Elastic.easeOut.config(0.5)}, "bb8-in =+1.5")
// .to(bb8Head, 0.2, {y: "-=10", ease: Power3.easeInOut, yoyo: true, repeatDelay: 0.4})
// .to(bb8Head, 0.35, {y: "+=15", ease: Power1.easeInOut, yoyo: true, repeatDelay: 0.2})
// .to(bb8Head, 0.275, {y: "-=5", yoyo: true, repeatDelay: 0.1, ease: Power4.easeInOut})
// .to(bb8Head, 1.2, {rotation: -30, transformOrigin: "center", ease: Back.easeInOut.config(2)}, "bb8-out");
// .to (bb8Body, 1,{y: "-=30", ease: Power1.easeInOut, repeat: 20000, yoyo: true})





let tl5 = new TimelineMax({repeat: -1});
tl5.set(mountainS, {left: 600, autoAlpha: 1});
tl5.fromTo(mountainS, 20, {x: -1440, ease: Linear.easeNone}, {x: 2640, ease: Linear.easeNone});
tl5.set(mountainS, {autoAlpha: 0});

let tl6 = new TimelineMax({repeat: -1});
tl6.set(mountainM, {autoAlpha: 1,y:310});
tl6.fromTo(mountainM, 22, {x: -1440, ease: Linear.easeNone}, {x: 4740, ease: Linear.easeNone});
tl6.set(mountainM, {autoAlpha: 0});

let tl7 = new TimelineMax({repeat: -1});
tl7.set(mountainL, {autoAlpha: 1});
tl7.fromTo(mountainL, 18, {x: -2840, ease: Linear.easeNone}, {x: 2640, ease: Linear.easeNone});
tl7.set(mountainL, {autoAlpha: 0});

let tlSm = new TimelineMax({repeat: -1,delay:4});
tlSm.set(mountainSm, {left: 600, autoAlpha: 1});
tlSm.fromTo(mountainSm, 18, {x: -1940, ease: Linear.easeNone}, {x: 4640, ease: Linear.easeNone});
tlSm.set(mountainSm, {autoAlpha: 0});

let tl9 = new TimelineMax({repeat: -1,delay:4});
tl9.set(mountainMd, {autoAlpha: 1,y:310});
tl9.fromTo(mountainMd, 22, {x: -940, ease: Linear.easeNone}, {x: 4740, ease: Linear.easeNone});
tl9.set(mountainMd, {autoAlpha: 0});

let tl10 = new TimelineMax({repeat: -1,delay:8});
tl10.set(mountainLg, {autoAlpha: 1,y:20});
tl10.fromTo(mountainLg, 20, {x: -2840, ease: Linear.easeNone}, {x: 3640, ease: Linear.easeNone});
tl10.set(mountainLg, {autoAlpha: 0});

let tl11 = new TimelineMax({repeat: -1});
tl11.set(earth1, {autoAlpha: 1});
tl11.fromTo(earth1, 10, {x: -2440, ease: Linear.easeNone}, {x: 2640, ease: Linear.easeNone});
tl11.set(earth1, {autoAlpha: 0});

let tl12 = new TimelineMax({repeat: -1});
tl12.set(earth2, {autoAlpha: 1});
tl12.fromTo(earth2, 10, {x: -1440, ease: Linear.easeNone}, {x: 1060, ease: Linear.easeNone});
tl12.set(earth2, {autoAlpha: 0});

let tl13 = new TimelineMax({repeat: -1});
tl13.set(earth3, {autoAlpha: 1});
tl13.fromTo(earth3, 10, {x: -1440, ease: Linear.easeNone}, {x: 2640, ease: Linear.easeNone});
tl13.set(earth3, {autoAlpha: 0});

let tl14 = new TimelineMax({repeat: -1});
tl14.set(earth4, {autoAlpha: 1});
tl14.fromTo(earth4, 10, {x: -2860, ease: Linear.easeNone}, {x: 0, ease: Linear.easeNone});
tl14.set(earth4, {autoAlpha: 0});

let tl15 = new TimelineMax({repeat: -1});
tl15.set(middle, {left: 600, autoAlpha: 1,y:60});
tl15.fromTo(middle, 35, {x: -940, ease: Linear.easeNone}, {x: 1640, ease: Linear.easeNone});
tl15.set(middle, {autoAlpha: 0});

