var mymap
var drawData


function initMap() {

    var mymap = L.map('mapid').setView([51.505, -0.09], 13);


    // specify clicklistener

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoidmFqYXIiLCJhIjoiY2piZ2t3NmRjMzh0ODMybm8ybDU2eTJ0bSJ9.TengI7-dpODq_2Z5_6HYCA'
    }).addTo(mymap);


    mymap.on('click', clickedOnMap);


    return mymap;


}


$(document).ready(function (e) {




    mymap = initMap();
    readGeoJson("");


});

function clickedOnMap(e) {


    var text = initgoalstrtext($('#stglSelect > .btn.active')[0].id)

    console.log(text)

    var latlng = e.latlng


    text.text(latlng.lat.toFixed(2) + "     " + latlng.lng.toFixed(2))


}


function readGeoJson(adress) {

    $.getJSON(adress + "geo.geojson", function (data) {
        console.log(data)
        drawGeoJson(data)


    });

}




function clickedOnFlyButton(coords) {
    mymap.flyTo(coords, 15);
}


// reads the geoJson data and draws it on the map
function drawGeoJson(data) {


    // L.geoJSON(data, {
    //    style: myStyle
    //}).addTo(mymap);

    drawData = data

    console.log(["geometry"]["coordinates"]);


    L.geoJSON(drawData, {
        style: {color: "#ff0000"}
    }).addTo(mymap);

    center_route(drawData["geometry"]["coordinates"])

}


// assumption: first and last are most important
// zooms out to show the whole route
function center_route(list_coords) {

    var bounds = [list_coords[0],
        list_coords[list_coords.length - 1]];

    console.log(bounds[0]);
    swap(bounds[0]);
    swap(bounds[1]);
    console.log(bounds[0]);


    mymap.flyToBounds(bounds);


}

function swap(x) {
    var temp = x[0];
    x[0] = x[1];
    x[1] = temp;


}





