let mountainS = document.getElementById("mountain1");
let mountainM = document.getElementById("mountain2");
let mountainL = document.getElementById("mountain3");
let mountainSm = document.getElementById("mountain4");
let mountainMd = document.getElementById("mountain5");
let mountainLg = document.getElementById("mountain6");
let mountainN = document.getElementById("mountain7");
let mountainNr = document.getElementById("mountain8");
let middle = document.getElementById("middle");

let tl1 = new TimelineMax({repeat: 1000});
tl1.set(mountainS, {left: 600, autoAlpha: 1})
    .fromTo(mountainS, 40, {x: -1440, ease: Linear.easeNone}, {x: 2640, ease: Linear.easeNone})
    .set(mountainS, {autoAlpha: 0})
    .set(mountainM, {autoAlpha: 1, y: 410})
    .fromTo(mountainM, 42, {x: -1440, ease: Linear.easeNone}, {x: 4740, ease: Linear.easeNone})
    .set(mountainM, {autoAlpha: 0})
    .set(mountainL, {autoAlpha: 1})
    .fromTo(mountainL, 58, {x: -2840, ease: Linear.easeNone}, {x: 3640, ease: Linear.easeNone})
    .set(mountainL, {autoAlpha: 0});

let tlmd = new TimelineMax({repeat: 1000});
tlmd.set(middle, {left: 900, autoAlpha: 1})
    .fromTo(middle, 25, {x: -940, ease: Linear.easeNone}, {x: 900, ease: Linear.easeNone})
    .set(middle, {autoAlpha: 0});

let tlSm = new TimelineMax({repeat: 1000, delay: 14});
tlSm.set(mountainSm, {left: 600, autoAlpha: 1})
    .fromTo(mountainSm, 40, {x: -1940, ease: Linear.easeNone}, {x: 4640, ease: Linear.easeNone})
    .set(mountainSm, {autoAlpha: 0});

let tlMd = new TimelineMax({repeat: 1000, delay: 16});
tlMd.set(mountainMd, {autoAlpha: 1, y: 410})
    .fromTo(mountainMd, 42, {x: -940, ease: Linear.easeNone}, {x: 4740, ease: Linear.easeNone})
    .set(mountainMd, {autoAlpha: 0});

let tlLg = new TimelineMax({repeat: 1000, delay: 10});
tlLg.set(mountainLg, {autoAlpha: 1, y: 120})
    .fromTo(mountainLg, 58, {x: -2840, ease: Linear.easeNone}, {x: 3640, ease: Linear.easeNone})
    .set(mountainLg, {autoAlpha: 0});

let tlN = new TimelineMax({repeat: 1000});
tlN.set(mountainN, {autoAlpha: 1, y: 160})
    .fromTo(mountainN, 37, {x: -2800, ease: Linear.easeNone}, {x: 2060, ease: Linear.easeNone})
    .set(mountainN, {autoAlpha: 0})

let tlNr = new TimelineMax({repeat: 1000, delay: 10,});
tlNr.set(mountainNr, {autoAlpha: 1, y: 160})
    .fromTo(mountainNr, 37, {x: -2860, ease: Linear.easeNone}, {x: 1000, ease: Linear.easeNone})
    .set(mountainNr, {autoAlpha: 0})

function spinEarth() {
    let tmax_tl = new TimelineMax({
        delay: 0.1675,
        repeat: 1000
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