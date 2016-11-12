(function() {
  'use strict';
  window.thoughter = window.thoughter || {};

  window.thoughter.createThought = createThought;
  window.thoughter.recieveThought = recieveThought;

    /**
     * Ajax call to create a new Thought
     *  @param {String} createThoughter the value of the input
     *  @return {[type]} [description]
     */
    function createThought(thought){

    return $.ajax({
        url: 'https://thoughter.herokuapp.com/api/Thoughts',
        method: 'POST',
        dataType: 'json',
        data: JSON.stringify({
          content: thought
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

    /**
     * Ajax GET call to return all new Thoughts
     * @return {String} [description]
     */
    function recieveThought() {

      return $.ajax({
        url: 'https://thoughter.herokuapp.com/api/Thoughts',
        method: 'GET',
        dataType: 'json',
        headers: {
          'content-type':'application/json'
        }
      })
      .done(function handleYes(data) {
        console.log('success', data);
      })
      .fail(function handleNo(xhr){
        console.log('failure', xhr);
      });
    }


}());

(function() {
  'use strict';
  window.thoughter = window.thoughter || {};

  $('main').hide();
  console.log('running', $('main'));

  $(window).on('hashchange', function viewSwitch(){
      $('main').hide();
      $(window.location.hash).show();
  });

}());

(function() {
  'use strict';
  window.thoughter = window.thoughter || {};

  $('.submit-form').on('submit', function formSubmission(event){
    event.preventDefault();
    window.thoughter.createThought();

  });


  // CHANGE THIS ELEMENT
  $('.recent').on('click', function recieveThought(event){
    event.preventDefault();
    window.thoughter.recieveThought();

  });
}());
