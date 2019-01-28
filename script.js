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
    });

tl
    .to(bb8Shadow, 1, {scale: 1.2, yoyo: true});

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

