/*
    D3 is a library that allows for us to implement data-driven documents
    D3 allows for more interactive elements to be added to our web pages
    PERFECT FOR DASHBOARDS!
*/

// first use D3.json() to access jsonified data
// then allows for us to implement a promise
d3.json("data.json").then(function(data){
    // if the endpoint (in this case the data.json file) is accessed, simply output the data
    console.log(data);
});

// function that filters greek search results
function popularGreek(greek)
{
    return greek.greekSearchResults > 100000000
}

d3.json("data.json").then(function(data){
    // use the data from the json to plot the charts

    // filter results and make an array
    let poppinGreeks = data.filter(popularGreek);

    // use console.log() to check the results
    //console.log(poppinGreeks);

    // make the trace for the greek data
    let trace = {
        x: poppinGreeks.map(entry => entry.greekName),
        y: poppinGreeks.map(entry => entry.greekSearchResults),
        type: "bar"
    };

    // data trace array
    let traceData = [trace];

    // apply the title
    let layout = {
        title: "Popular Greek Search Results"
    };

    // render the plot to Plotly
    Plotly.newPlot("plot1", traceData, layout);
});