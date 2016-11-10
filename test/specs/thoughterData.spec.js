(function() {
  'use strict';

  window.thoughter = window.thoughter || {};

    var expect = chai.expect
    var fixtures = $('#fixtures').html();


    describe('Posting new thought', function(){
      it('Should post new thought to the server', function(){

      });
    });

  describe('Thoughter Creation', function (){

        it('Should know that the namespace exists', function(){
          expect(window.thoughter).to.be.a('object')
        });
        describe('Create Thought', function (){
          it('should create a thought when submitted', function(done) {
            console.log(window.thoughter.createThought('this is a thought'));
          var xhr = window.thoughter.createThought();
            expect(xhr).to.be.an('object');
            expect(xhr.done).to.be.a('function');
            expect(xhr.fail).to.be.a('function');

            xhr
              .done(function handleSuccess(data){
                expect(data).to.be.a('function');
                done();
              })
              .fail(function handleFailure(){
                done();
              })
          })
        });

    });


}());
