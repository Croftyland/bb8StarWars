let tl = new TimelineMax({
    repeat: -1,
    delay:0.5
});

let bb8 = document.getElementById("bb8");
let bb8Body = document.getElementById("bb8-body");
let bb8Shadow = document.getElementById("bb8-shadow");
let bb8Head = document.getElementById("bb8-head");


tl
    .to(bb8Shadow, 0.1, {scale: 1.1, repeat: -1, yoyo: true, ease: Linear.easeNone})
    .to(bb8, 1, {scale: 1.05, transformOrigin: "center bottom", ease: Power1.easeInOut}, 0)
    .to(bb8Head, 0.05, {y: 0, ease: Power1.easeInOut}, 0)
    .to(bb8, 5, {x: "-=300", ease: Power1.easeInOut, yoyo: true}, 2)
    .to(bb8, 0.5, {
        y: "-=100",
        scale: 1,
        transformOrigin: "center bottom",
        ease: Power1.easeInOut,
        repeat: 1000,
        yoyo: true
    }, 1)
    .to(bb8, 0.5, {y: "-=250", ease: Power1.easeInOut, repeat:-1, yoyo: true}, 1)
    .to(bb8, 5, {x: "+=200", ease: Power1.easeInOut, repeat:-1, yoyo: true}, 2)
    .to(bb8, 0.05, {y: "-=20", ease: Power1.easeInOut, repeat: -1, yoyo: true}, 0.05)
    .to(bb8Head, 0.05, {y: "-=30", ease: Power1.easeInOut, repeat: -1, yoyo: true}, 0.08)

// .to(this.bb8.rotatingHead, 10, { bezier: [{ rotation: -20 }, { rotation: 10 }, { rotation: 0 }], ease: Linear.easeNone, repeat: 100 }, 0);


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
    },)
//
// let animTl = new TimelineMax({repeat: -1});
// let tween1 = (TweenLite.to(bb8Head, 1, {
//     rotation: 30,
//     x: 240,
//     y: 130,
//     transformOrigin: "center",
//     ease: new SlowMo(0.5, 0.8),
//     yoyo: true
// }))
// let tween2 = (TweenLite.to(bb8Head, 1, {
//     rotation: 0,
//     x: 10,
//     y: 0,
//     transformOrigin: "center",
//     ease: Power3.easeInOut,
//     yoyo: true,
// }))
// let tween3 = (TweenLite.to(bb8Head, 1, {
//     rotation: -20,
//     x: -200,
//     y: 30,
//     transformOrigin: "center",
//     ease: Bounce.easeOut,
//     yoyo: true,
// }))
// let tween4 = (TweenLite.to(bb8Head, 1, {
//     rotation: 0,
//     x: 10,
//     y: 0,
//     transformOrigin: "center",
//     ease: Power3.easeInOut,
//     yoyo: true,
// }))

// animTl.add([tween1, tween2, tween3, tween4], "+=1", "sequence", 0.5);

// animTl.to(bb8Head, 0.05, {y: 0, ease: Power1.easeInOut}, 0)
//     .to(bb8Head, 0.05, {y: "-=30", ease: Power1.easeInOut, repeat: 2, yoyo: true}, 0.08)
//     .to(bb8Head, 0.2, {y: "-=10", ease: Power3.easeInOut, repeat: 2, yoyo: true, repeatDelay: 0.4}, "bb8-in =+1")
//     .to(bb8Head, 0.35, {
//         y: "+=15",
//         ease: Power1.easeInOut,
//         repeat: 2,
//         yoyo: true,
//         repeatDelay: 0.2
//     })
//     .to(bb8Head, 0.275, {
//         y: "-=5",
//         repeat: 1,
//         yoyo: true,
//         repeatDelay: 0.1,
//         ease: Power4.easeInOut
//     })


