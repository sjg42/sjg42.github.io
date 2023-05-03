//perform an API call to the CitiBike json
dataURL = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json"
d3.json(dataURL).then(
    function(responseData)
    {
        //console.log(responseData)
        createMarkers(responseData);
    }
);

//function to create the markers
function createMarkers(bikeData)
{
    //console.log(bikeData); //returns an array of data where the array 
                        //is stored in .data.stations

    //pull the stations property to get the array
    var stations = bikeData.data.stations;

    //create the markers by
    //making an empty array so that we can toggle the markers
    var bikeMarkers = [];

    //populate bikeMarkers by looping through array of stations
    for (var i =0; i<stations.length; i++)
    {     
        //for each station, make a marker, then bind a popup with the station's name and capacity
            //use L.marker([lat, long]).bindPopup(info)
        let currentMarker = L.marker([stations[i].lat, stations[i].lon])
        .bindPopup(`<center>
        <h2>${stations[i].name}</h2><hr>
        Bike Capacity: <b>${stations[i].capacity}</b>
        </center>`)

        //then add the marker to the bikeMarkers array
        bikeMarkers.push(currentMarker)
    }

    //finall call the function to create the map and pass in the markers
    //have to make them a LayerGroup()
    createMap(L.layerGroup(bikeMarkers));
}

//after the markers are created, function creates the map
function createMap(bikeMarkers)
{
    // Create the tile layer that will be the background of our map.
    var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    // grayscale layer
    var grayscale = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    });
    // water color layer
    var waterColor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        minZoom: 1,
        maxZoom: 16,
        ext: 'jpg'
    });

    //make an opbject to hold the baseMaps
    var baseMaps = {
        "Street Map":streetmap,
        "Grayscale Map": grayscale,
        "Watercolor Map": waterColor
    }

    //add the toggleable overlay
    var overlayMaps = {
        "Bike Stations": bikeMarkers
    }

    //NYC coordinates = [40.73, -74.0059]
    //make the map with the options
    var myMap = L.map("map",{
        center: [40.73, -74.0059],
        zoom: 12,
        layers: [streetmap, bikeMarkers]
    });
    
    //create the layer control
    L.control.layers(baseMaps, overlayMaps,{
        collapsed: false
    }).addTo(myMap)

}