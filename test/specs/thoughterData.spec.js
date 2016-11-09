(function() {
  'use strict';

  window.thoughter = window.thoughter || {};

    var expect = chai.expect
    var fixtures = $('#fixtures').html();

    describe('Thoughter Creation', function (){

        it('Should know that the namespace exists', function(){
          expect(window.thoughter).to.be.a('object')
        });
        
    });


}());
