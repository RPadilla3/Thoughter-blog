(function() {
  'use strict';
  window.thoughter = window.thoughter || {};

  window.thoughter.createThought = createThought;

    /**
     * Ajax call to create a new Thought
     *  @param {String} createThoughter the value of the input
     *  @return {[type]} [description]
     */
    function createThought(){

      $.ajax({
        url: 'https://thoughter.herokuapp.com/api/Thoughts',
        method: 'POST',
        dataType: 'json',
        data: JSON.stringify({
          content: $('.form-control').val()
        }),
        headers: {
          'content-type':'application/json'
        }
    })
      .done(function handleSuccess(data){
        console.log('success', data);
      })
      .fail(function handleFailure(xhr){
        console.log('failed', xhr);
      });
    }


}());
