(function() {
    'use strict';
    window.thoughter = window.thoughter || {};
    window.thoughter.appendThoughts = appendThoughts;

    $('.submit-form').on('submit', function formSubmission(event) {
        event.preventDefault();
        window.thoughter.createThought();

    });


    // CHANGE THIS ELEMENT
    $('#recent').on('hashchange', function recieveThought(event){
      event.preventDefault();
      window.thoughter.recieveThought();
    });
      /**
       * [appendThoughts description]
       * @param  {[type]} thoughts [description]
       * @return {[type]}          [description]
       */

      function appendThoughts(thoughts) {
        thoughts.forEach(function(thoughter) {
          $('#recent').append($('<p>' + thoughter.content + '<p>'))
        });
      }


    // $('.').on('hashchange', function recieveThoughtId(event){
    //   event.preventDefault();
    //   window.thoughter.recieveThoughtID();
    // });
    //
}());
