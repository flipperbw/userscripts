// ==UserScript==
// @name         SoundboardDownload
// @version      0.1
// @description  Adds links and shit
// @include      /^https?:\/\/(www\.)?soundboard.com\/sb\//
// ==/UserScript==

var soundboard_title = window.location.pathname.split('sb/')[1].split('?')[0];

var observerConfig = {
    childList: true,
    characterData: true,
    subtree: true
};
var target_observe = document.querySelector('#playlist');

var observer = new MutationObserver(function (mutations) {
    observer.disconnect();
    if (mutations.length > 0) {
        $.getJSON('http://www.soundboard.com/handler/gettrackjson.ashx?boardname=' + soundboard_title, function( trackdata ) {
            var trackcells = $('#playlist div.songs');
            $.each( trackcells, function(k, v) {
                var hr = trackdata[k]['mp3'];
                var track_title = trackdata[k]['title'];
                var title = soundboard_title + "-" + track_title;
                title = title.replace(/[^a-z0-9\-_]/gi, '_');
                $(v).append('<a style="float:right" href="' + hr + '" download="' + title + '" class="flipperbw"><span style="background:#f78096;padding:8px 17px;margin:7px;border-radius:4px;">▼</span></a>');
            });
        });
	}
});

observer.observe(target_observe, observerConfig);
