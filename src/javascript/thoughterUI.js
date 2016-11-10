(function() {
  'use strict';
  window.thoughter = window.thoughter || {};

  $('.submit-form').on('submit', function formSubmission(event){
    event.preventDefault();
    window.thoughter.createThought();

  });
}());
