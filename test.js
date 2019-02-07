/*

Read the description <3

*/

function random(min, max) {
    if (max === null) {
        max = min;min = 0;
    }
    return Math.random() * (max - min) + min;
}

function chanceRoll(chance) {
    if (chance === null) {
        chance = 50;
    }
    return chance > 0 && Math.random() * 100 <= chance;
}

var o = {
    // Timeline related
    isIntro: true,
    isRollingLeft: true,
    currentTl: [],
    currentGravelTl: [],
    gravelProgress: [],
    prevGravelProgress: [],
    // SlowMotion
    slowMoFactor: 1,
    slowMoFactorBody: 1,
    // Head light status on/off
    lightsOnOff: [0, 0],
    // Wiggle head
    wiggleFrame: 0,
    allTheTime: 0,
    nowAndThen: 0,
    ranDur: 0,
    ranPos: 0,
    moveAmount: 0,
    // Null object to parallax head components
    headNull: { value: 0 },

    init: function init() {
        this.cacheDOM();
        this.setStart();
        this.animate();
    },
    cacheDOM: function cacheDOM() {
        this.svg = document.querySelector("[data-bb8=svg]");
        this.gravelGroup = this.svg.querySelector("[data-bb8=gravelGroup]");
        this.gravel = this.svg.querySelectorAll("[data-bb8=gravel]");
        this.largeMask = this.svg.querySelector("[data-bb8=largeMask]");
    },
    setStart: function setStart() {
        TweenMax.set(this.svg, { autoAlpha: 1 });
        o.spreadGravel();
    },
    spreadGravel: function spreadGravel() {
        TweenMax.set(o.gravelGroup, { x: -50 });

        for (var i = 0; i < o.gravel.length; i++) {
            TweenMax.set(o.gravel[i], { x: 0, y: random(100, 800) });
        }
        o.getGravelAnims("left");
    },
    getRollAnims: function getRollAnims(direction) {
        var tls = o.getGravelAnims(direction);
        var spinDir;

        if (direction === "left") {
            spinDir = "-=360";
        } else {
            spinDir = "+=360";
        }
        var tl = new TimelineMax({});

        tls[tls.length] = tl;
        return tls;
    },
    getIntroAnim: function getIntroAnim() {
        var tl = new TimelineMax();

        tl.to(this.largeMask, 1.5, { scale: 0.95, ease: Back.easeInOut.config(1) })
            .add(o.animate);
        return tl;
    },
    getGravelAnims: function getGravelAnims(direction) {
        // Make an array for timelines
        var tls = [];

        // Iterate thru gravel array, create unique timelines for each and add them to timelines array
        for (var i = 0; i < o.gravel.length; i++) {
            // Values for all timelines all times
            var speed = 0.5;
            var fromX = direction === "left" ? 0 : 2935;
            var toX = direction === "left" ? 2935 : 0;

            // Generate seamless progress values
            if (o.prevGravelProgress.length != o.gravel.length) {
                // If prev array not full of values, then give each gravel a randomize progress value
                o.gravelProgress[i] = random(0, 1);
                // ...and push it into the prev array
                o.prevGravelProgress[i] = o.gravelProgress[i];
            } else {
                // If prev array is full of values, then inverse each value
                o.gravelProgress[i] = 1 - o.prevGravelProgress[i];
            }

            // Create an individual timeline
            var tl = new TimelineMax({ repeat: 2000 });

            // Define the tween and set the playhead at correct progress
            tl.fromTo(o.gravel[i], speed, { x: fromX }, { x: toX, ease: Linear.easeNone }).progress(o.gravelProgress[i]).paused(true);

            // Add the timeline to the array
            tls[i] = tl;
        }
        // Spit out the array
        return tls;
    },
    animate: function animate() {
        if (this.isIntro) {
            o.playIntro();
        } else {
            o.stopPlayNext();
        }
    },
    playIntro: function playIntro() {
        o.isIntro = false;
        o.currentTl[0] = o.getIntroAnim();
        o.currentTl[0].play();
    },
    stopPlayNext: function stopPlayNext() {
        var direction;
        if (o.isRollingLeft) {
            o.isRollingLeft = true;
            direction = "left";
        } else {
            o.isRollingLeft = true;
            direction = "left";
        }

        TweenMax.to(o.currentTl, 0.5 / o.slowMoFactor, { timeScale: 0, onComplete: o.roll, onCompleteParams: [direction] });
    },
    roll: function roll(direction) {
        var tls = o.getRollAnims(direction);

        for (var i = 0; i < o.currentTl.length; i++) {
            o.currentTl[i].kill();
        }

        for (var j = 0; j < tls.length; j++) {

            o.currentTl[j] = tls[j];

            o.currentTl[j].play().timeScale(0);

            TweenMax.to(o.currentTl[j], 1 / o.slowMoFactor, { timeScale: o.slowMoFactorBody });
        }
    },
    recordProgress: function recordProgress() {
        for (var i = 0; i < o.gravel.length; i++) {
            o.prevGravelProgress[i] = o.currentTl[i].progress();
        }
    },

};

o.init();