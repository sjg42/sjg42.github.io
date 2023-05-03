// create our initial map object by setting the latitude, longitude, and zoom level
// store this information into a variable using let or var

// atlanta coordinates: 33.7488° N, 84.3877° W -> [33.7488, -84.3877]

/*
var myMap = L.map("map", 
    {
        center: [33.7488, -84.3877],
        zoom: 10
    }
);
*/
// can also use setview to chain the initialization together
var myMap = L.map("map").setView([33.7488, -84.3877], 10);

// add the initial tile layer to the map
// use L.tileLayer(tileattributes)
// .addTo(mapObject)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// add a marker to the map
var marker = L.marker(
    [33.7488, -84.3877],
    {
        title: "Hello From Atlanta, GA, USA!" // hoverable text
    }
).addTo(myMap);

// add a popup to the marker as well - makes the marker clickable!
marker.bindPopup("Hello From Atlanta, GA!");