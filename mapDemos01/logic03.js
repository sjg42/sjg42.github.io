/*
    City
Latitude
Longitude

New York
40.7128
-74.0059

Los Angeles
34.0522
-118.2437

Houston
29.7604
-95.3698

Omaha
41.2524
-95.9980

Chicago
41.8781
-87.6298
*/

/* zoom level be somewhat low - center it on the USA */
// 37.0902° N, 95.7129° W

var myMap = L.map("map", 
    {
        center: [37.0902, -95.7129],
        zoom: 4
    }
);

// add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// add the pepperonis
var nyc = L.marker(
    [40.7128, -74.0059], {
        title: "New York"
    }
).addTo(myMap);

nyc.bindPopup("Hello From New York City!");

var la = L.marker(
    [34.0522, -118.2437], {
        title: "Los Angeles"
    }
).addTo(myMap);

la.bindPopup("Hello From Los Angeles!");

var houston = L.marker(
    [29.7604, -95.3698], {
        title: "Houston"
    }
).addTo(myMap);

houston.bindPopup("Hello From Houston!");

var omaha = L.marker(
    [41.2524, -95.9980], {
        title: "Omaha"
    }
).addTo(myMap);

omaha.bindPopup("Hello From Omaha!");

var chi = L.marker(
    [41.8781, -87.6298], {
        title: "Chicago"
    }
).addTo(myMap);

chi.bindPopup("Hello From Chicago!");
