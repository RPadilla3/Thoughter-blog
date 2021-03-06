(function() {
    'use strict';
    window.thoughter = window.thoughter || {};

    window.thoughter.createThought = createThought;
    window.thoughter.recieveThought = recieveThought;
    window.thoughter.recieveThoughtID = recieveThoughtID;

    /**
     * Ajax call to create a new Thought
     *  @param {String} createThoughter the value of the input
     *  @return {[type]} [description]
     */
    function createThought(thought) {

        return $.ajax({
                url: 'https://thoughter.herokuapp.com/api/Thoughts',
                method: 'POST',
                dataType: 'json',
                data: JSON.stringify({
                    content: $('.form-control').val()
                }),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .done(function handleSuccess(data) {
                console.log('success', data);
            })
            .fail(function handleFailure(xhr) {
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
                    'content-type': 'application/json'
                }
            })
            .done(function handleYes(data) {
                console.log('success', data);
            })
            .fail(function handleNo(xhr) {
                console.log('failure', xhr);
            });
    }


    /**
     * Returns a specific thought, based on the Id of the thoughter
     * @return {[type]} [description]
     */
    function recieveThoughtID() {

        return $.ajax({
                url: 'https://thoughter.herokuapp.com/api/Thoughts/:id',
                method: 'GET',
                dataType: 'json',
            })
            .done(function success(data) {
                console.log('success', data);
            })
            .fail(function failure(xhr) {
                console.log('failed', xhr);
            });
    }


}());
