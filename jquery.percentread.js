(function($) {
  "use strict";

  var $window = $(window);

  var defaults = {
    template: undefined,
    targetArea: document
  };

  $.fn.percentRead = function(options) {
    var _self = this;
    options = $.extend({}, defaults, options);

    function reportPercentage(percent) {
      var percent = parseInt(percent);
      var output;

      if(typeof options.template === 'function') {
        output = options.template(percent)

        $(_self).html(typeof output === 'string' ? output : percent);
      } else if(typeof options.template === 'string') {
        $(_self).html(percent + options.template);
      } else {
        $(_self.html(percent));
      }
    }

    function calcPercentage(totalHeight, scrollAmount) {
      return (scrollAmount / totalHeight) * 100;
    }

    // actual event handler
    $window.on('scroll.percentRead', function() {
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
        reportPercentage(0);
        return;  
      } else if(parseInt(totalScrollAmount) >= parseInt(targetAreaTop + targetAreaHeight)) {
        reportPercentage(100);
        return;
      }

      // actually report the amount scrolled
      reportPercentage(calcPercentage(targetAreaHeight, targetAreaScrollAmount));
    });

    // trigger the scroll event handler when the window is resized as well
    $window.on('resize.percentRead', function() {
      $window.trigger('scroll.percentRead');
    });

    // trigger the event right off the bat so the amount is set right away
    $window.trigger('scroll.percentRead');
  }
})(jQuery);