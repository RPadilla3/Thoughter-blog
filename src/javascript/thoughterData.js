(function() {
  'use strict';
  window.thoughter = window.thoughter || {};

  $('.submit-form').on('submit', function(event){
    event.preventDefault();
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
      alert('SUCCESS BITCH')
    })
    .fail(function handleFailure(xhr){
      console.log('failed', xhr);
    });
  });



}());
