import $ from "jquery";

$.when( $.ready ).then(function() {
  const tabs = $(".main-page__tablink");
  tabs.on("click", function(eventObject) {
    eventObject.preventDefault();
    tabs.removeClass("active");
    $(this).addClass("active");
    $(".tab").fadeOut();
    $(`[data-id="${this.id}"]`).fadeIn()
  });

  $(".show-button").on("click", function(eventObject) {
    eventObject.preventDefault();
    const button = $(eventObject.target);
    button.siblings('.hiding-wrapper').fadeIn();
    button.siblings('.hide-button').show();
    button.hide();
  });

  $(".hide-button").on("click", function(eventObject) {
    eventObject.preventDefault();
    const button = $(eventObject.target);
    button.siblings('.hiding-wrapper').fadeOut();
    button.siblings('.show-button').show();
    button.hide();
  });
});
