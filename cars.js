$(document).ready(function () {
    var start_time = new Date();
    var score = 0;
    var score_disp = $("#score");
    var hi_score_disp = $("#hi-score");
    $(document).keydown(function (e) {
        console.log('in function');
        switch (e.which) {
            case 39: $('#bluecar').finish().animate({ "left": "+=228px" });
                break;
            case 37: $('#bluecar').finish().animate({ "left": "-=228px" });
                break;
            case 38: $('#greencar').finish().animate({ "left": "+=228px" });
                break;
            case 40: $('#greencar').finish().animate({ "left": "-=228px" });
                break;
        }
    });
    var updateHighScore = function () {
        if (Number(hi_score_disp.text()) < score) {
            hi_score_disp.text(score);
        }
    }
    var reset = function () {
        score_disp.text("00");
        score = 0;
        start_time = new Date();
    }
    setInterval(function () {
        console.log(score_disp.val());
        var current_time = new Date();
        score = Math.floor((current_time - start_time) / 1000)
        score_disp.text(score)
    }, 700);
    setInterval(function () {
        var playerpos = $('#bluecar').position();
        var pw2 = playerpos.top;
        var px2 = playerpos.left;
        var c = $("#barricade1").position();
        if ((c.top >= pw2 - 50 && c.top <= pw2 - 50 + 70) && (c.left >= px2 - 50 && c.left <= px2 - 50 + 70)) {
            alert("GAME OVER!");
            updateHighScore();
            reset();
        }
        var h = $("#barricade2").position();
        if ((h.top >= pw2 - 50 && h.top <= pw2 - 50 + 70) && (h.left >= px2 - 50 && h.left <= px2 - 50 + 70)) {
            alert("GAME OVER!");
            updateHighScore();
            reset();
        }
        var t = $("#barricade3").position();
        if ((t.top >= pw2 - 50 && t.top <= pw2 - 50 + 70) && (t.left >= px2 - 50 && t.left <= px2 - 50 + 70)) {
            alert("GAME OVER!");
            updateHighScore();
            reset();
        }
        var k = $("#barricade4").position();
        if ((k.top >= pw2 - 50 && k.top <= pw2 - 50 + 70) && (k.left >= px2 - 50 && k.left <= px2 - 50 + 70)) {
            alert("GAME OVER!");
            updateHighScore();
            reset();
        }
        var i = $("#greencar").position();
        if ((i.top >= pw2 - 50 && i.top <= pw2 - 50 + 70) && (i.left >= px2 - 50 && i.left <= px2 - 50 + 70)) {
            alert("GAME OVER!");
            updateHighScore();
            reset();
        }
        var p1 = $("#police1").position();
        if ((p1.left >= px2 - 50 && p1.left <= px2 - 50 + 70)) {
            alert("GAME OVER!");
            updateHighScore();
            reset();
        }
    }, 200);
    setInterval(function () {
        var playerpos = $('#greencar').position();
        var pw1 = playerpos.top;
        var px1 = playerpos.left;
        var c = $("#barricade1").position();
        if ((c.top >= pw1 - 50 && c.top <= pw1 - 50 + 70) && (c.left >= px1 - 50 && c.left <= px1 - 50 + 70)) {
            alert("GAME OVER!");
            updateHighScore();
            reset();
        }
        var h = $("#barricade2").position();
        if ((h.top >= pw1 - 50 && h.top <= pw1 - 50 + 70) && (h.left >= px1 - 50 && h.left <= px1 - 50 + 70)) {
            alert("GAME OVER!");
            updateHighScore();
            reset();
        }
        var t = $("#barricade3").position();
        if ((t.top >= pw1 - 50 && t.top <= pw1 - 50 + 70) && (t.left >= px1 - 50 && t.left <= px1 - 50 + 70)) {
            alert("GAME OVER!");
            updateHighScore();
            reset();
        }
        var k = $("#barricade4").position();
        if ((k.top >= pw1 - 50 && k.top <= pw1 - 50 + 70) && (k.left >= px1 - 50 && k.left <= px1 - 50 + 70)) {
            alert("GAME OVER!");
            updateHighScore();
            reset();
        }
        var p2 = $("#police2").position();
        if ((p2.left >= px1 - 50 && p2.left <= px1 - 50 + 70)) {
            alert("GAME OVER!");
            updateHighScore();
            reset();
        }
    }, 200);
})
