// var tl = new TimelineMax({
//     repeat:-1
// });
//
// TweenMax.set("#bb8-body", {
//     transformOrigin:"50% 50%"
// });
//
// tl.to("#bb8-body",1, {rotation:"+=720"});
var bb8Body = document.getElementById("bb8-body");
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

var bb8Shadow = document.getElementById("bb8-shadow");
TweenMax.to(bb8Shadow, 1,{scale:1.2, repeat:-1, yoyo:true});