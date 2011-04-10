(function($) {
  $.fn.invoke = function(beforeSend) { 
    var element = $(this),
        data,
        method,
        url,
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

    if (element.is('form')) {
      method = element.attr('method');
      url = element.attr('action');
      data = element.serializeArray();
    } else if (element.is('a')) {
      method = element.data('method');
      url = element.attr('href');
      data = null;
    } else {
      method = element.data('method');
      url = element.data('action');
      data = null;      
    }

    return $.ajax({
      type: method,
      beforeSend: beforeSend,
      url: url,
      data: data,
      dataType: dataType
    }); 
  };
})(jQuery);
