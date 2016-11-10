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
