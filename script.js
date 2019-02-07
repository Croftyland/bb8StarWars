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
let bb8 = document.getElementById("bb8");
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
let middle = document.getElementById("middle");

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

let animTl = new TimelineMax({repeat: -1});
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

animTl.to(bb8Head, 0.05, {y: 0, ease: Power1.easeInOut}, 0)
     .to(bb8Head, 0.05, {y: "-=30", ease: Power1.easeInOut, repeat: 2, yoyo: true}, 0.08)
    .to(bb8Head, 0.2, {y: "-=10", ease: Power3.easeInOut, repeat: 2, yoyo: true, repeatDelay: 0.4}, "bb8-in =+1")
    .to(bb8Head, 0.35, {
        y: "+=15",
        ease: Power1.easeInOut,
        repeat: 2,
        yoyo: true,
        repeatDelay: 0.2
    })
    .to(bb8Head, 0.275, {
        y: "-=5",
        repeat: 1,
        yoyo: true,
        repeatDelay: 0.1,
        ease: Power4.easeInOut
    })


let tl1 = new TimelineMax({repeat: -1});
tl1.set(mountainS, {left: 600, autoAlpha: 1});
tl1.fromTo(mountainS, 40, {x: -1440, ease: Linear.easeNone}, {x: 2640, ease: Linear.easeNone});
tl1.set(mountainS, {autoAlpha: 0});

tl1.set(mountainM, {autoAlpha: 1, y: 410});
tl1.fromTo(mountainM, 42, {x: -1440, ease: Linear.easeNone}, {x: 4740, ease: Linear.easeNone});
tl1.set(mountainM, {autoAlpha: 0});


tl1.set(mountainL, {autoAlpha: 1});
tl1.fromTo(mountainL, 58, {x: -2840, ease: Linear.easeNone}, {x: 3640, ease: Linear.easeNone});
tl1.set(mountainL, {autoAlpha: 0});

tl1.set(middle, {left: 900, autoAlpha: 1, y: 480});
tl1.fromTo(middle, 25, {x: -940, ease: Linear.easeNone}, {x: 900, ease: Linear.easeNone});
tl1.set(middle, {autoAlpha: 0});

let tlSm = new TimelineMax({repeat: -1, delay: 14});
tlSm.set(mountainSm, {left: 600, autoAlpha: 1});
tlSm.fromTo(mountainSm, 40, {x: -1940, ease: Linear.easeNone}, {x: 4640, ease: Linear.easeNone});
tlSm.set(mountainSm, {autoAlpha: 0});

let tlMd = new TimelineMax({repeat: -1, delay: 16});
tlMd.set(mountainMd, {autoAlpha: 1, y: 410});
tlMd.fromTo(mountainMd, 42, {x: -940, ease: Linear.easeNone}, {x: 4740, ease: Linear.easeNone});
tlMd.set(mountainMd, {autoAlpha: 0});

let tlLg = new TimelineMax({repeat: -1, delay: 10});
tlLg.set(mountainLg, {autoAlpha: 1, y: 120});
tlLg.fromTo(mountainLg, 58, {x: -2840, ease: Linear.easeNone}, {x: 3640, ease: Linear.easeNone});
tlLg.set(mountainLg, {autoAlpha: 0});

let tlN = new TimelineMax({repeat: -1});
tlN.set(mountainN, {autoAlpha: 1, y: 160});
tlN.fromTo(mountainN, 37, {x: -2800, ease: Linear.easeNone}, {x: 2060, ease: Linear.easeNone});
tlN.set(mountainN, {autoAlpha: 0});

let tlNr = new TimelineMax({repeat: -1, delay: 10,});
tlNr.set(mountainNr, {autoAlpha: 1, y: 160});
tlNr.fromTo(mountainNr, 37, {x: -2860, ease: Linear.easeNone}, {x: 1000, ease: Linear.easeNone});
tlNr.set(mountainNr, {autoAlpha: 0});

function spinEarth() {
    let tmax_tl = new TimelineMax({
        delay: 0.1675,
        repeat: -1
    });

    let earth_continents = [

        $('svg #earth1'),
        $('svg #earth2'),

    ];

    let earth_speed = 8;

    var map_from = {
        x: -1150
    };

    var map_to = {
        x: 2300,
        ease: Linear.easeOut
    };

    tmax_tl.fromTo(earth_continents, earth_speed, map_from, map_to, 0);

    return tmax_tl;
}

spinEarth();




var listItems = $('.stonePart1'),
    listItemsArray = listItems.toArray();
var til = new TimelineMax({repeat: -1});

listItemsArray.sort(function () {
    return 0.5 - Math.random()
});
til.staggerFromTo(listItemsArray, 3, {position: 'relative', x: 300}, {x: 3500, ease: Power2.easeInOut}, 0.525);

var listItems = $('.stonePart2'),
    listItemsArray = listItems.toArray();
var til = new TimelineMax({repeat: -1});

listItemsArray.sort(function () {
    return 0.5 - Math.random()
});
til.staggerFromTo(listItemsArray, 3, {position: 'relative', x: 0}, {x: 3500, ease: Power2.easeInOut}, 0.625);
var listItems = $('.stonePart3'),
    listItemsArray = listItems.toArray();
var til = new TimelineMax({repeat: -1});

listItemsArray.sort(function () {
    return 0.5 - Math.random()
});
til.staggerFromTo(listItemsArray, 3, {position: 'relative', x: 0}, {x: 3500, ease: Power2.easeInOut}, 0.725);
var listItems = $('.stonePart4'),
    listItemsArray = listItems.toArray();
var til = new TimelineMax({repeat: -1});

listItemsArray.sort(function () {
    return 0.5 - Math.random()
});
til.staggerFromTo(listItemsArray, 3, {position: 'relative', x: 0}, {x: 3500, ease: Power2.easeInOut}, 0.425);
var listItems = $('.stonePart5'),
    listItemsArray = listItems.toArray();
var til = new TimelineMax({repeat: -1});

listItemsArray.sort(function () {
    return 0.5 - Math.random()
});
til.staggerFromTo(listItemsArray, 3, {position: 'relative', x: 0}, {x: 3500, ease: Power2.easeInOut}, 0.325);