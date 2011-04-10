(function($) {
  $.fn.invoke = function() { 
    var $this = $(this),
    data = $this.data();
    return $.ajax({
      type: data.method,
      url: $this.attr('href'),
      dataType: data.type
    }); 
  };
})(jQuery);
