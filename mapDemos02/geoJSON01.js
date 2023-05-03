// NYC Coordinates: 40.7128 deg N, 74.0060 deg W

//make a variable to hold the map - center at the coordinates above
var myMap = L.map("map",{
    center : [40.7128, -74.0060],
    zoom : 11
});

// add the street layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// //get the GeoJSON data - use D3
// d3.json("nyc.geojson").then(
//     function(data)
//     {
//         //because this nyc.geoJSON file has polygon coordinates,
//         //it plots the outlines of the neighborhoods
//         L.geoJSON(data).addTo(myMap);
//     }
// )


// //specify the properties in a variable to be used with the style property
// //in L.geoJSON()
// var styling = {
//     color: "black", //change the outlines for each neighborhood
//     fillColor:"pink", //changes the fill color to pink
//     fillOpacity: 0.4, //changes the fill opacity
//     weight: 1.5 //changes the outline weight
// }


// //we can change the colors of the outlines of the neighborhoods
// d3.json("nyc.geojson").then(
//     function(data)
//     {
//         //because this nyc.geoJSON file has polygon coordinates,
//         //it plots the outlines of the neighborhoods.
//         //add a style property to change the coloring of the neighborhoods
//         L.geoJSON(data,
//             {
//                 style:styling
//                 /* can also use:
//                 {
//                     color: "black", //change the outlines for each neighborhood
//                     fillColor:"pink", //changes the fill color to pink
//                     fillOpacity: 0.4, //changes the fill opacity
//                     weight: 1.5 //changes the outline weight
//                 }*/
//             }).addTo(myMap);
//     }
// );



// function that colors the boroughs based on teh value of teh Borough 
// property passed in
function boroughColor(borough)
{
    if (borough == "Brooklyn")
        return "yellow";
    else if (borough == "Bronx")
        return "red";
    else if (borough == "Manhattan")
        return "orange";
    else if (borough == "Queens")
        return "green";
    else
        return "blue"; // must be Staten Island

}


d3.json("nyc.geojson").then(
    function(data)
    {
        //because this nyc.geoJSON file has polygon coordinates,
        //it plots the outlines of the neighborhoods

        //can access the boroughs by going to data.feature.properties.borough
        L.geoJSON(data,{
            style: function(feature){
                return {
                color: "black", //outline color
                fillOpacity: 0.4, // fill Opacity
                weight: 1.5, //outline weight
                fillColor:  //call a funciton and pass in the value
                    boroughColor(feature.properties.borough)
            };
        },
        //this property allows for actions and other attributes to be
        //mapped to each neighborhood on the map
        onEachFeature: function(feature, layer)
        {
            //bind a popup when the neighborhood is clicked
            layer.bindPopup(`<center><h2>
            ${feature.properties.neighborhood}</h2>
            <hr><h3>${feature.properties.borough}</h3></center>`);

            //use layer.on() to add events to the map based on the mouse
            layer.on({
                //hover over a neighborhood with the mouse
                mouseover:function(event)
                {
                    //tell what triggered the event - store the ref in a
                    //variable
                    layer = event.target;
                    // use seStyle() property to change the fillOpacity
                    layer.setStyle({
                        fillOpacity: 0.9
                    })
                },
                //remove mouse from a neighborhood
                mouseout: function(event)
                {
                    //tell what triggered the event - store the ref in a
                    //variable
                    layer = event.target;
                    // use seStyle() property to change the fillOpacity
                    layer.setStyle({
                        fillOpacity: 0.4 //resets the fill of the
                                        //neightborhood back to original
                                        // fill
                    })
                },
                // add a click property to zoom in on a neightborhood 
                //when it's clicked
                click: function(event)
                {
                    //use a map function, fitBounds
                    myMap.fitBounds(event.target.getBounds());
                }
            });
        }
    }).addTo(myMap);
    }
);

