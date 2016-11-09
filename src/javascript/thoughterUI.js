(function() {
  'use strict';
  window.thoughter = window.thoughter || {};

  $('.submit-form').on('submit', function(event){
    event.preventDefault();
    window.thoughter.createThoughter();

  });
}());
