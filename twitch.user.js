// ==UserScript==
// @name          Twtich Hotkeys
// @author		  Flipperbw
// @version       1.0
// @include       /^https?://(www|beta)\.twitch\.tv\/[a-zA-Z0-9]\w{3,24}\/[a-z]/\d+/
// @require       http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

var offset = 10;
var k = {
    "106": "j",
    "108": "l"
}

//var player = $('#player object');
var current_secs = 0;
var player;

$(document).on("keypress", function (e) {
    if (k[e.keyCode] == "j") {
        if (!player) {
            player = $('#player object')[0];
        }
        current_secs = player.getVideoTime();
        new_secs = Math.ceil(current_secs - offset, 0);
        player.videoSeek(new_secs);
    }
    else if (k[e.keyCode] == "l") {
        if (!player) {
            player = $('#player object')[0];
        }
        current_secs = player.getVideoTime();
        new_secs = current_secs + offset;
        player.videoSeek(new_secs);
    }
});
