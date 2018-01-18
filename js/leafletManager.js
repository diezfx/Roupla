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


    var currentselected = currentSelect.start;


    mymap = initMap();
    console.log("waaaarum")
    readgeoJson("");


});

function clickedOnMap(e) {

    alert("You clicked the map at " + e.latlng);


}


function readgeoJson(adress) {

    $.getJSON(adress + "geo.geojson", function (data) {
        console.log(data)
        updateData(data)


    });

}

function updateData(data) {

    drawData = data;

    drawGeoJson()

}


function clickedOnFlyButton(coords) {
    mymap.flyTo(coords, 15);
}


function drawGeoJson() {


    // L.geoJSON(data, {
    //    style: myStyle
    //}).addTo(mymap);

    console.log(drawData["geometry"]["coordinates"]);


    L.geoJSON(drawData, {
        style: {color: "#ff0000"}
    }).addTo(mymap);

    center_route(drawData["geometry"]["coordinates"])

}


// expection: first and last are most important
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


currentSelect = {
    start: 0,
    goal: 1
}



