

var mymap



function initMap(){

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

$(document).ready(function(e) {


    var currentselected=currentSelect.start;




    mymap=initMap();







});

function clickedOnMap(e){


    mymap.flyTo([45.505, -0.09], 13);

}

function clickedOnFlyButton(coords){
    mymap.flyTo(coords,13);
}


currentSelect ={
    start :0,
        goal:1}



