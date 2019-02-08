function random(min, max) {
    if (max === null) {
        max = min;min = 0;
    }
    return Math.random() * (max - min) + min;
}

let obj = {
    currentTl: [],
    currentStoneTl: [],
    stoneProgress: [],
    prevStoneProgress: [],

    init: function init() {
        this.cacheDOM();
        this.animate();
    },
    cacheDOM: function cacheDOM() {
        this.svg = document.querySelector("[data-bb8=svg]");
        this.stoneGroup = this.svg.querySelector("[data-bb8=stones]");
        this.stone = this.svg.querySelectorAll("[data-bb8=stone]");
        obj.spreadStone();
    },
    spreadStone: function spreadStone() {
        TweenMax.set(obj.stoneGroup, {y:2000, x: -50 });

        for (var i = 0; i <obj.stone.length; i++) {
            TweenMax.set(obj.stone[i], {y:-100, x: 0, y: random(100, 800) });
        }
        obj.getStoneAnims("left");

    },
    getRollAnims: function getRollAnims(direction) {
        var tls =obj.getStoneAnims(direction);
        var tl = new TimelineMax({});

        tls[tls.length] = tl;
        return tls;
    },
    getStoneAnims: function getStoneAnims(direction) {
        var tls = [];

        for (var i = 0; i <obj.stone.length; i++) {
            var speed = 0.5;
            var fromX = direction === "left" ? 0 : 2935;
            var toX = direction === "left" ? 2935 : 0;


            if (obj.prevStoneProgress.length != obj.stone.length) {
                obj.stoneProgress[i] = random(0, 1);
                obj.prevStoneProgress[i] = obj.stoneProgress[i];
            } else {
                obj.stoneProgress[i] = 1 - obj.prevStoneProgress[i];
            }

            var tl = new TimelineMax({ repeat: 2000 });

            tl.fromTo(obj.stone[i], speed, { x: fromX }, { x: toX, ease: Linear.easeNone }).progress(obj.stoneProgress[i]).paused(true);

            tls[i] = tl;
        }
        return tls;

    },
    animate: function animate() {
        var direction;
            direction = "left";
        obj.roll(direction);
    },
    roll: function roll(direction) {
        var tls = obj.getRollAnims(direction);

        for (var i = 0; i <obj.currentTl.length; i++) {
            obj.currentTl[i].kill();
        }

        for (var j = 0; j < tls.length; j++) {

            obj.currentTl[j] = tls[j];

            obj.currentTl[j].play();

            TweenMax.to(obj.currentTl[j]);
        }
    },
};

obj.init();