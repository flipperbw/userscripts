// ==UserScript==
// @name       ImgurAlbumLinker
// @version    0.1
// @description  adds links and shit
// @match      http://imgur.com/a/*
// ==/UserScript==

$('#image-container img').each( function() {
    var im = $(this);
    var href = im.attr('src');
    im.wrap('<a href="' + href + '" class="flipperbw"></a>');
});
