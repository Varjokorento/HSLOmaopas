$( "#salimaster" ).click(function() {
    $( "#sali" ).toggle( "fast", function() {
    });
});
var luku = Math.floor(Math.random());
var x = "Seuraava bussi metroasemalle:" + luku;

function haeBussit() {

    var x = "Seuraava bussi metroasemalle:" + luku;

            $("#bussintiedot").append(x);
            $("#metrobussintiedot").append(x);
}

$( document ).ready( haeBussit() );

