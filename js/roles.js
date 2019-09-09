(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $('ul.tabs').tabs();
       $('.datepicker').pickadate({
    selectMonths: false, // Creates a dropdown to control month
    selectYears: 10, // Creates a dropdown of 15 years to control year,
    format: 'yyyy/mm/dd',
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    minDate: 0,
    closeOnSelect: false // Close upon selecting a date,
  });
    $('#textarea1').val('');
  $('#textarea1').trigger('autoresize');
  $('select').material_select();
  $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.

        console.log(modal, trigger);
      },
      complete: function() {  } // Callback for Modal close
    }
  );
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  $('.tooltipped').tooltip({delay: 50});
  $('.slider').slider();
  $('.collapsible').collapsible();
$(".dropdown-button").dropdown({ hover: true, constrainWidth: false });
  }); // end of document ready
})(jQuery); // end of jQuery name space