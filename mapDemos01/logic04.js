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

// draw a circle around GA Tech - 33.7756° N, 84.3963° W
// use L.circle
L.circle(
    [33.7756, -84.3963],
    {
        color: "black",
        fillColor: "yellow",
        radius: 500,
        fillOpacity: .80
    }
).bindPopup("Hello From GA Tech!")
.addTo(myMap);

// draw a rectangle starting at ponce city market - 33.7728° N, 84.3656° W
// use L.rectangle()
L.rectangle(
    [
        // specify the start and end of the rectangle
        [33.7728, -84.3656],
        [33.7718, -84.3646]
    ],
    {
        color: "black",
        fillColor: "red",
        stroke: true,
        weight: 2
    }
)
.bindPopup("Rectangle near Ponce City Market")
.addTo(myMap)

// use a polyline to draw a line from mercedes benz stadium to
// state farm arena

L.polyline([
    [33.7573, -84.3963],
    [33.7553, -84.4006]
],
    {
        color: "red"
    }
).addTo(myMap);

// draw a polygon around Chateau Elan - 34.1018° N, 83.8177° W
// use L.polygon() to draw a rectangle
L.polygon(
    [
        [34.1018, -83.8177],
        [34.1008, -83.8177],
        [34.1008, -83.8157]
    ],
    {
        color: "black",
        fillColor: "orange",
        fillOpacity: 0.8
    }
)
.bindPopup("Triangle near-ish Chateau Elan")
.addTo(myMap);
