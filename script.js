// var tl = new TimelineMax({
//     repeat:-1
// });
//
// TweenMax.set("#bb8-body", {
//     transformOrigin:"50% 50%"
// });
//
// tl.to("#bb8-body",1, {rotation:"+=720"});
let bb8Body = document.getElementById("bb8-body");
TweenMax.set(bb8Body, {
    transformOrigin:"50% 50%"
});
TweenMax.to(bb8Body,1, {
    css:
        {
            rotation:-360
        },
    // remove default easing for seamless loop
    ease:Linear.easeNone,
    repeat: -1,
    paused: false});

let bb8Shadow = document.getElementById("bb8-shadow");
TweenMax.to(bb8Shadow, 1,{scale:1.2, repeat:-1, yoyo:true});

    // mainTl = new TimelineMax({repeat: -1, repeatDelay: 1});

let bb8Head = document.getElementById("bb8-head");


TweenMax.to(bb8Head, 3, {rotation:40, x:40, y:130, transformOrigin:"530px 890px", repeat:10, easeInOut:Bounce, yoyo: true});
TweenLite.to(bb8Head, 4, { ease: Back.easeOut.config(1.7), y: -10 });
