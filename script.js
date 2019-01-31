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
let mountainN = document.getElementById("mountain7");
let mountainNr = document.getElementById("mountain8");
let earth1 = document.getElementById("earth1");
let earth2 = document.getElementById("earth2");
let middle = document.getElementById("middle");
let stones1 = document.getElementsByClassName("stonePart1");
let stones2 = document.getElementsByClassName("stonePart2");
let stones3 = document.getElementsByClassName("stonePart3");
let stones4 = document.getElementsByClassName("stonePart4");
let stones5 = document.getElementsByClassName("stonePart5");


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
tl5.fromTo(mountainS, 30, {x: -1440, ease: Linear.easeNone}, {x: 2640, ease: Linear.easeNone});
tl5.set(mountainS, {autoAlpha: 0});

let tl6 = new TimelineMax({repeat: -1});
tl6.set(mountainM, {autoAlpha: 1,y:410});
tl6.fromTo(mountainM, 32, {x: -1440, ease: Linear.easeNone}, {x: 4740, ease: Linear.easeNone});
tl6.set(mountainM, {autoAlpha: 0});

let tl7 = new TimelineMax({repeat: -1});
tl7.set(mountainL, {autoAlpha: 1,y:80});
tl7.fromTo(mountainL, 48, {x: -2840, ease: Linear.easeNone}, {x: 3640, ease: Linear.easeNone});
tl7.set(mountainL, {autoAlpha: 0});

let tlSm = new TimelineMax({repeat: -1,delay:14});
tlSm.set(mountainSm, {left: 600, autoAlpha: 1});
tlSm.fromTo(mountainSm, 30, {x: -1940, ease: Linear.easeNone}, {x: 4640, ease: Linear.easeNone});
tlSm.set(mountainSm, {autoAlpha: 0});

let tl9 = new TimelineMax({repeat: -1,delay:16});
tl9.set(mountainMd, {autoAlpha: 1,y:410});
tl9.fromTo(mountainMd, 32, {x: -940, ease: Linear.easeNone}, {x: 4740, ease: Linear.easeNone});
tl9.set(mountainMd, {autoAlpha: 0});

let tl10 = new TimelineMax({repeat: -1,delay:10});
tl10.set(mountainLg, {autoAlpha: 1,y:120});
tl10.fromTo(mountainLg, 48, {x: -2840, ease: Linear.easeNone}, {x: 3640, ease: Linear.easeNone});
tl10.set(mountainLg, {autoAlpha: 0});

let tl11 = new TimelineMax({repeat: -1,y:1360});
tl11.set(mountainN, {autoAlpha: 1});
tl11.fromTo(mountainN, 27, {x: -2800, ease: Linear.easeNone}, {x: 2060, ease: Linear.easeNone});
tl11.set(mountainN, {autoAlpha: 0});

let tl13 = new TimelineMax({repeat: -1,delay:10,y:1360});
tl13.set(mountainNr, {autoAlpha: 1});
tl13.fromTo(mountainNr, 27, {x: -2860, ease: Linear.easeNone}, {x: 1000, ease: Linear.easeNone});
tl13.set(mountainNr, {autoAlpha: 0});

let tl12 = new TimelineMax({repeat: -1,yoyo:true});
tl12.set(earth1, {autoAlpha: 1});
tl12.fromTo(earth1, 5, {x: 460, ease: Linear.easeNone}, {x: 1630, ease: Linear.easeNone});
tl12.set(earth1, {autoAlpha: 0});

let tl14 = new TimelineMax({repeat: -1,yoyo:true});
tl14.set(earth2, {autoAlpha: 1});
tl14.fromTo(earth2, 5, {x: -1080, ease: Linear.easeNone}, {x: -500, ease: Linear.easeNone});
tl14.set(earth2, {autoAlpha: 0});

let tl15 = new TimelineMax({repeat: -1});
tl15.set(middle, {left: 600, autoAlpha: 1,y:60});
tl15.fromTo(middle, 35, {x: -940, ease: Linear.easeNone}, {x: 900, ease: Linear.easeNone});
tl15.set(middle, {autoAlpha: 0});

let tl16 = new TimelineMax({repeat: -1});
tl16.set(stones1, {left: 600, autoAlpha: 1});
tl16.fromTo(stones1, 5, {x: -3000, ease: Linear.easeNone}, {x: 2860, ease: Linear.easeNone});
tl16.set(stones1, {autoAlpha: 0});

let tl17 = new TimelineMax({repeat: -1,delay:5});
tl17.set(stones2, {left: 600, autoAlpha: 1});
tl17.fromTo(stones2, 5, {x: -3000, ease: Linear.easeNone}, {x: 2860, ease: Linear.easeNone});
tl17.set(stones2, {autoAlpha: 0});

let tl18 = new TimelineMax({repeat: -1,delay:1});
tl18.set(stones3, {left: 600, autoAlpha: 1});
tl18.fromTo(stones3, 5, {x: -3200, ease: Linear.easeNone}, {x: 2860, ease: Linear.easeNone});
tl18.set(stones3, {autoAlpha: 0});

let tl19 = new TimelineMax({repeat: -1,delay:3});
tl19.set(stones4, {left: 600, autoAlpha: 1});
tl19.fromTo(stones4, 5, {x: -3000, ease: Linear.easeNone}, {x: 2860, ease: Linear.easeNone});
tl19.set(stones4, {autoAlpha: 0});

let tl20 = new TimelineMax({repeat: -1,delay:2});
tl20.set(stones5, {left: 600, autoAlpha: 1});
tl20.fromTo(stones5, 5, {x: -3000, ease: Linear.easeNone}, {x: 2060, ease: Linear.easeNone});
tl20.set(stones5, {autoAlpha: 0});