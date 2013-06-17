(function($) {
  "use strict";

  var $window = $(window),
    $document = $(document);

  // trigger the event right off the bat so the amount is set right away
  $document.ready(function() {
    $window.trigger("scroll.percentRead")
  });

  $.percentRead = function(report_element) {
    function reportPercentage(percent) {
      $(report_element).text(parseInt(percent) + "%");
    }

    function calcPercentage(docHeight, scrollAmount) {
      return (scrollAmount / docHeight) * 100;
    }

    $window.on('scroll.percentRead', function() {
      var windowHeight = $window.height(),
        documentHeight = $document.height(),
        scrollAmount = windowHeight + $window.scrollTop();

      // if the height of the window is equal to or less than the height of the
      // content then we can't really display the percent read, so we'll have to just show
      // 100%. We check this on each scroll event to allow for dynamic DOM manipulation after
      // the page load.
      if(parseInt(windowHeight) >= parseInt(documentHeight)) {
        reportPercentage(100);
        return;
      }

      // actually report the amount scrolled
      reportPercentage(calcPercentage(documentHeight, scrollAmount));
    });
  }
})(jQuery);