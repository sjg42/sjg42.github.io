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
d3.json(dataURL).then(
    function(data)
    {
        console.log(data);

        //access data[i] - since the results are in an array
        //loop and produce the markers for each point - L.marker
        // data{i].location.coordinates[1] then .coordinates[0]}
        for (var i = 0; i < data.length; i++)
        {
            //extract the lcoation - saving the .location property
            var location = data[i].location;

            //set up a variable to hold date options
            var dateOptions = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }

            //plot the location by adding the marker to the map
            L.marker([location.coordinates[1], location.coordinates[0]])
            .bindPopup(
                `<center>${new Date(data[i].date).toLocaleDateString("en-US",
                dateOptions)}
                <hr>
                <b>Address: </b> ${data[i].address}<br>
                <b>Description: </b> ${data[i].descript}<br>
                <b>Time: </b> ${data[i].time}
                </center>`
            )
            .addTo(myMap)
        }
    }
)
