function Quadrat() {

    var lat=$('#lat').val();
    var long=$('#long').val();
    clickedOnFlyButton([lat,long]);

}

$(document).ready(function(e) {
    $('#buttonInput').click(  Quadrat);






});




