
(function($) {
  
  $.fn.carousel = function() {

    var $leftArrow = $('.carousel__prev');
    var $rightArrow = $('.carousel__next');

    var $elementsList = $('.carousel');
 
    var shiftPx = $elementsList.find('.carousel__item').outerWidth(true);
    var currentLeftValue = 0;
  
    var elementsCount = $elementsList.find('.carousel__item').length;

    var wrapperWidth = $elementsList.parent('.carousel-wrapper').width();
    var imgWidth = $elementsList.find('.carousel__item img').width()
    var elementsWrapper = Math.floor(wrapperWidth/imgWidth);

    var minOffset = - ((elementsCount - elementsWrapper) * shiftPx);
    var maxOffset = 0;

    $leftArrow.click(function() {
      if (currentLeftValue != maxOffset) {
        currentLeftValue += shiftPx;
        $elementsList.animate({left: currentLeftValue + 'px'}, {queue:false, duration:600});
        $rightArrow.removeClass('inactive');
      }        
      if (currentLeftValue == maxOffset) {
        $leftArrow.addClass('inactive');
      }

    });
 
    $rightArrow.click(function() {
      if (currentLeftValue != minOffset) {
        currentLeftValue -= shiftPx;
        $elementsList.animate({left: currentLeftValue + 'px'}, {queue:false, duration:600});
        $leftArrow.removeClass('inactive');
      }        
      if (currentLeftValue == minOffset) {
        $rightArrow.addClass('inactive');
      }

    });

    return this;

  }


})(jQuery);

