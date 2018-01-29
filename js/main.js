function Quadrat() {

    var lat=$('#lat').val();
    var long=$('#long').val();
    console.log($('#stglSelect > .btn.active')[0].id);
    clickedOnFlyButton([lat,long]);


}


function initgoalstrtext(id) {


    if (id == 'startbtn')
        return $('#startbtntext');


    if (id == 'goalbtn')
        return $('#goalbtntext');

}





$(document).ready(function(e) {
    initgoalstrtext();
    $('#buttonInput').click(  Quadrat);
});








