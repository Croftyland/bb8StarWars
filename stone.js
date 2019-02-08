function random(min, max) {
    if (max === null) {
        max = min;min = 0;
    }
    return Math.random() * (max - min) + min;
}

let obj = {
    // Timeline related
    isIntro: true,
    isRollingLeft: true,
    currentTl: [],
    currentGravelTl: [],
    gravelProgress: [],
    prevGravelProgress: [],
    motion: 1,
    motions: 1,


    init: function init() {
        this.cacheDOM();
        this.setStart();
        this.animate();
    },
    cacheDOM: function cacheDOM() {
        this.svg = document.querySelector("[data-bb8=svg]");
        this.gravelGroup = this.svg.querySelector("[data-bb8=gravelGroup]");
        this.gravel = this.svg.querySelectorAll("[data-bb8=gravel]");
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
            o.stopPlayNext();
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

        TweenMax.to(o.currentTl, 0.5 / o.motion, { timeScale: 0, onComplete: o.roll, onCompleteParams: [direction] });
    },
    roll: function roll(direction) {
        var tls = o.getRollAnims(direction);

        for (var i = 0; i < o.currentTl.length; i++) {
            o.currentTl[i].kill();
        }

        for (var j = 0; j < tls.length; j++) {

            o.currentTl[j] = tls[j];

            o.currentTl[j].play().timeScale(0);

            TweenMax.to(o.currentTl[j], 1 / o. motion, { timeScale: o.motions });
        }
    },
};

obj.init();