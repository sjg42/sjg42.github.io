// SF, CA Coords: 37.7749, -122.4194
// data URL = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=1000"
//map variable that points to san fran
var myMap = L.map("map",{
    center: [37.7749, -122.4194],
    zoom: 12
})

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//make a call to d3.json and get the data from the url
var dataURL = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=1000"

//use d3.json() to make a heatmap form the promise data
d3.json(dataURL).then(
    function(data)
    {
        //make an empty array to hold all of the points
        var heatArray = [];

        //loop through the array of data points
        for (var i = 0; i < data.length; i++)
        {
            //extract the location
            var location = data[i].location;

            //push the coordinates as an array to the heatArray
            heatArray.push(
                [
                    location.coordinates[1],
                    location.coordinates[0]
                ]
            );
        }

        //use L.heatLayer() to create a heatmap from the array of points and add them to the map
        L.heatLayer(heatArray,{
            radius:25,
            blur: 40
        }).addTo(myMap);

    });