function random(min, max) {
    if (max === null) {
        max = min;min = 0;
    }
    return Math.random() * (max - min) + min;
}

let obj = {
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
        this.gravelGroup = this.svg.querySelector("[data-bb8=stones]");
        this.gravel = this.svg.querySelectorAll("[data-bb8=stone]");
    },
    setStart: function setStart() {
        TweenMax.set(this.svg, { autoAlpha: 1 });
        obj.spreadGravel();
    },
    spreadGravel: function spreadGravel() {
        TweenMax.set(obj.gravelGroup, {y:2000, x: -50 });

        for (var i = 0; i <obj.gravel.length; i++) {
            TweenMax.set(obj.gravel[i], {y:-100, x: 0, y: random(100, 800) });
        }
        obj.getGravelAnims("left");
    },
    getRollAnims: function getRollAnims(direction) {
        var tls =obj.getGravelAnims(direction);
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
        var tls = [];

        for (var i = 0; i <obj.gravel.length; i++) {
            var speed = 0.5;
            var fromX = direction === "left" ? 0 : 2935;
            var toX = direction === "left" ? 2935 : 0;


            if (obj.prevGravelProgress.length != obj.gravel.length) {
                obj.gravelProgress[i] = random(0, 1);
                obj.prevGravelProgress[i] = obj.gravelProgress[i];
            } else {
                obj.gravelProgress[i] = 1 - obj.prevGravelProgress[i];
            }

            var tl = new TimelineMax({ repeat: 2000 });

            tl.fromTo(obj.gravel[i], speed, { x: fromX }, { x: toX, ease: Linear.easeNone }).progress(obj.gravelProgress[i]).paused(true);

            tls[i] = tl;
        }
        return tls;
    },
    animate: function animate() {
        obj.stopPlayNext();
    },

    stopPlayNext: function stopPlayNext() {
        var direction;
        if (obj.isRollingLeft) {
            obj.isRollingLeft = true;
            direction = "left";
        } else {
            obj.isRollingLeft = true;
            direction = "left";
        }

        TweenMax.to(obj.currentTl, 0.5 /obj.motion, { timeScale: 0, onComplete:obj.roll, onCompleteParams: [direction] });
    },
    roll: function roll(direction) {
        var tls =obj.getRollAnims(direction);

        for (var i = 0; i <obj.currentTl.length; i++) {
            obj.currentTl[i].kill();
        }

        for (var j = 0; j < tls.length; j++) {

            obj.currentTl[j] = tls[j];

            obj.currentTl[j].play().timeScale(0);

            TweenMax.to(obj.currentTl[j], 1 /obj. motion, { timeScale:obj.motions });
        }
    },
};

obj.init();