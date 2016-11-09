(function() {
  'use strict';
  window.thoughter = window.thoughter || {};

  $(window).on('hashchange', function viewSwitch(){
      $('main').hide();
      $(window.location.hash).show();
  });

}());
