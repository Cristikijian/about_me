import $ from 'jquery';

$.when( $.ready ).then(function() {
  const tabs = $('.main-page__tablink');
  tabs.on('click', function(eventObject) {
    eventObject.preventDefault();
    tabs.removeClass("active");
    $(this).addClass("active");
    $(".tab").hide();
    $(`[data-id="${this.id}"]`).show()
  });
});