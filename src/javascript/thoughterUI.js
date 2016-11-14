(function() {
    'use strict';
    window.thoughter = window.thoughter || {};

    $('.submit-form').on('submit', function formSubmission(event) {
        event.preventDefault();
        window.thoughter.createThought();

    });


    // CHANGE THIS ELEMENT
    $('#recent').on('hashchange', function recieveThought(event){
      event.preventDefault();
      window.thoughter.recieveThought();
    });



    // $('.').on('hashchange', function recieveThoughtId(event){
    //   event.preventDefault();
    //   window.thoughter.recieveThoughtID();
    // });
    //
}());
