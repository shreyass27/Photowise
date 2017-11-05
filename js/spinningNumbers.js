// Returns true if the specified element has been scrolled into the viewport.
function isElementInViewport(elem) {
    'use strict';
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') !== -1) ? 'body' : 'html');

    var viewportTop = $(scrollElem).scrollTop();

    var viewportBottom = viewportTop + $(window).height();

    if ($elem.length) {

        // Get the position of the element on the page.

        var elemTop = Math.round($elem.offset().top);
        var elemBottom = elemTop + $elem.height();
        return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
    }
}
// Check if it's time to start the animation.
function checkAnimation() {
    'use strict';
    var $elem = $('.spinningNumber .container');

    // If the animation has already been started

    if (isElementInViewport($elem)) {
        $(".bounceInLeft").addClass("start");
        $(".bounceIn").addClass("start");
        $(".bounceInRight").addClass("start");

        // Start the animation

        $('.counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({ countNum: $this.text()}).animate({
                countNum: countTo
            },

                                                 {

                duration: 3000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }

            });
        });

    }
}

// Capture scroll events
$(window).scroll(function () {
    'use strict';
    checkAnimation();
});
