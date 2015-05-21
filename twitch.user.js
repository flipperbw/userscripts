// ==UserScript==
// @name          Twitch Hotkeys
// @author		  Flipperbw
// @version       1.0.1
// @include       /^https?://(www|beta)\.twitch\.tv\/[a-zA-Z0-9]\w{3,24}\/[a-z]/\d+/
// @require       http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

// Does not work for fullscreen due to browsers sucking

var offset = 10;
var ks = {
    "106": "j",
    "108": "l"
};

//var player = $('#player object');
var current_secs = 0;
var player;
var k;

$(document).on("keypress", function (e) {
    k = ks[e.keyCode];
    if (k == "j") {
        if (!player) {
            player = $('#player object')[0];
        }
        current_secs = player.getVideoTime();
        new_secs = Math.max(current_secs - offset, 0.1);
        player.videoSeek(new_secs);
    }
    else if (k == "l") {
        if (!player) {
            player = $('#player object')[0];
        }
        current_secs = player.getVideoTime();
        new_secs = current_secs + offset;
        player.videoSeek(new_secs);
    }
});
