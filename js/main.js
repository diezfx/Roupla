$(document).ready(function (e) {
    initgoalstrtext();
    $('#buttonInput').click(click_GotoBtn);
});


function click_GotoBtn() {

    var lat = $('#lat').val();
    var long = $('#long').val();
    console.log($('#stglSelect > .btn.active')[0].id);
    clickedOnFlyButton([lat, long]);


}

function clickedOnMap(e) {


    var text = initgoalstrtext($('#stglSelect > .btn.active')[0].id)
    console.log(text)
    var latlng = e.latlng

    text.text(latlng.lat.toFixed(2) + "     " + latlng.lng.toFixed(2))


}


function initgoalstrtext(id) {


    if (id == 'startbtn')
        return $('#startbtntext');


    if (id == 'goalbtn')
        return $('#goalbtntext');

}


function readGeoJson(adress) {

    $.getJSON(adress + "geo.geojson", function (data) {
        console.log(data)
        drawGeoJson(data)


    });

}






