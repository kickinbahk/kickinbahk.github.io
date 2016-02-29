/**
 * Created by fabiomadeira on 25/02/15.
 */
// jQuery for page scrolling feature
jQuery(document).ready(function(e) {
    e(".scroll").click(function(t) {
        t.preventDefault();
        e("html,body").animate({
            scrollTop: e(this.hash).offset().top
        }, 1e3)
    })
});

// Find all YouTube videos
var $allVideos = $("iframe[src*='//www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $(".container");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

    $(this)
        .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
        .removeAttr('height')
        .removeAttr('width');

});

// When the window is resized
$(window).resize(function() {

    var newWidth = $fluidEl.width();

    // Resize all videos according to their own aspect ratio
    $allVideos.each(function() {

        var $el = $(this);
        $el
            .width(newWidth)
            .height(newWidth * $el.data('aspectRatio'));

    });

    // Kick off one resize to fix all videos on page load
}).resize();


// Find all Images
var $allImages = $("img"),

    // The element that is fluid width
    $fluidElement = $(".container");

// Figure out and save aspect ratio for each video
$allImages.each(function() {

    $(this)
        .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
        .removeAttr('height')
        .removeAttr('width');

});

// When the window is resized
$(window).resize(function() {

    var newWidth = $fluidElement.width();

    // Resize all Images according to their own aspect ratio
    $allImages.each(function() {

        var $el = $(this);
        $el
            .width(newWidth)
            .height(newWidth * $el.data('aspectRatio'));

    });

    // Kick off one resize to fix all videos on page load
}).resize();

