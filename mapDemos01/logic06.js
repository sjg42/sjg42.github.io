/*
    City
Latitude
Longitude
population

New York
40.7128
-74.0059
population: 8804190

Los Angeles
34.0522
-118.2437
population: 3898747

Houston
29.7604
-95.3698
population: 2304580

Omaha
41.2524
-95.9980
population: 486051

Chicago
41.8781
-87.6298
population: 2746388
*/



// create an array of objects for each location
var cities = [
    {
        name: "New York",
        location: [40.7128, -74.0059],
        population: 8804190
    },
    {
        name: "Los Angeles",
        location: [34.0522, -118.2437],
        population: 3898747
    },
    {
        name: "Houston",
        location: [29.7604, -95.3698],
        population: 2304580
    },
    {
        name: "Omaha",
        location: [41.2524, -95.9980],
        population: 486051
    },
    {
        name: "Chicago",
        location: [41.8781, -87.6298],
        population: 2746388
    }
];

//make a list to hold the markers for each city - add the list of markers
// to a toggle-able layer
var cityMarkers = [];


// make a function that will calculate the size of each circle radius
// by taking the sqrt of population and multiplying times 40
function markerSize(pop)
{
    return Math.sqrt(pop) * 40;
}

//loop through each city in the array and extract the necessary
//attributes to build a circle marker and then add a popup to the map
for (var i = 0; i < cities.length; i++)
{
    cityMarkers.push(
        L.circle(cities[i].location, //extracts the location property from the object
        {
            color: "black",
            fillColor:"blue",
            fillOpacity: 0.6,
            //set the radius property, call on markerSize()
            radius: markerSize(cities[i].population)
        })
        .bindPopup(
            //Gotta use backticks!
            `<center><h1>${cities[i].name}</h1><hr><h3>Population: ${cities[i].population}</h3></center>`
        )
    );
};

// use the marker array as a layerGroup
// use L.layerGroup(array of markers)
var cityLayer = L.layerGroup(cityMarkers);

//use LayerGroup of markers as an overlay - can be toggle-able
var overlays = {
    cities: cityLayer //make a toggle-able option name cities
                        // that can show/hide the city markers
                        // and their population
}




// add the street layer
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});



// add the topography layer
var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});



//object to hold the tile layers
var tiles = {
    street: street,
    topography: topo
}



// add layers property to myMap
var myMap = L.map("map", 
    {
        center: [37.0902, -95.7129],
        zoom: 4,
        layers: [street, cityLayer]
    }
);


//pass the map layers into the layer control
// add the layer control to the map
L.control.layers(tiles,overlays).addTo(myMap)