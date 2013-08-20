(function($) {
  "use strict";

  var $window = $(window);

  var defaults = {
    callback: undefined,
    targetArea: document
  };

  $.percentRead = function(options) {
    options = $.extend({}, defaults, options);

    function runCallback(percent) {
      var percent = parseInt(percent, 10);
      
      if(options.callback) {
        options.callback(percent);
      }
    }

    function calcPercentage(totalHeight, scrollAmount) {
      return (scrollAmount / totalHeight) * 100;
    }

    // actual event handler
    $window.on('scroll.percentRead resize.percentRead', function() {
      var windowHeight = $window.height(),
        targetArea = $(options.targetArea),
        targetAreaHeight = targetArea.height(),
        targetAreaTop = targetArea.offset() ? targetArea.offset().top : 0, // in case document is passed in
        totalScrollAmount = windowHeight + $window.scrollTop(),
        targetAreaScrollAmount = totalScrollAmount - targetAreaTop;

      // if the target area is below the area that we can see we need
      // to set the percent to 0
      // but if we've read past the area we need to set the percent
      // to 100
      if(parseInt(totalScrollAmount) <= parseInt(targetAreaTop)) {
        runCallback(0);
        return;  
      } else if(parseInt(totalScrollAmount) >= parseInt(targetAreaTop + targetAreaHeight)) {
        runCallback(100);
        return;
      }

      // actually report the amount scrolled
      runCallback(calcPercentage(targetAreaHeight, targetAreaScrollAmount));
    });

    // trigger the event right off the bat so the amount is set right away
    $window.trigger('scroll.percentRead');
  }
})(jQuery);