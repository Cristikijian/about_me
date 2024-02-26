import $ from "jquery";

$.when( $.ready ).then(function() {
  $(".tablink").on("click", function(eventObject) {
    eventObject.preventDefault();
    const currentButton = $(eventObject.target);

    const prevButton = currentButton.siblings('.active');
    prevButton.removeClass('active');
    currentButton.addClass('active');

    $(`.tab[data-id="${prevButton.attr('id')}"]`).fadeOut(() => {
      $(`.tab[data-id="${currentButton.attr('id')}"]`).fadeIn()
    });   
  });

  $(".show-button").on("click", function(eventObject) {
    eventObject.preventDefault();
    const button = $(eventObject.target);
    button.siblings('.hiding-wrapper').slideIn();
    button.siblings('.hide-button').fadeIn();
    button.fadeOut();
  });

  $(".hide-button").on("click", function(eventObject) {
    eventObject.preventDefault();
    const button = $(eventObject.target);
    button.siblings('.hiding-wrapper').slideOut();
    button.siblings('.show-button').fadeIn();
    button.fadeOut();
  });
});
