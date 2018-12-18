for (var i = 1; i <= 5; i++) {

    (function(i){

        setTimeout( function timer() {

              console.log(i);

          },  1000 );

    })(i);

}
