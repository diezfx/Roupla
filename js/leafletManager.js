var mymap


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


    mymap.on('click', onMapClick);

    var coords = [[-0.09, 51.505], [-25, 23]];
    drawRoute(coords);


});

function clickedOnMap(e) {

    alert("You clicked the map at " + e.latlng);


}


function readJson(adress) {


}


function clickedOnFlyButton(coords) {
    mymap.flyTo(coords, 15);
}

function drawRoute(list_coords) {


    var myLine = [{
        "type": "LineString",
        "coordinates": list_coords
    }

    ];


    var myStyle = {
        "color": "#103dff",
        "weight": 5,
        "opacity": 0.65
    };

    L.geoJSON(myLine, {
        style: myStyle
    }).addTo(mymap);

    center_route(list_coords);
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



