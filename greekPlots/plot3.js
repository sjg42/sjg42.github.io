/*
    goal is to make a clustered column chart
        grab all greek names  -  store in an array
        grab all roman names  -  store in an array
        grab all greek search results  -  store in an array
        grab all roman search results  -  store in an array
*/

// declare the arrays to hold each set of data
let greekNames=[];
let romanNames = [];
let greekSearchResults = [];
let romanSearchResults = [];
let pairs = [];

// for loop to populate the arrays
// data.js and all of its information (searchResults array is available!!!)
/*for (var i=0; i<searchResults.length; i++)
{
    //access each entry of data;
    result = searchResults[i];

    //with each entry, push the information into the necessary
    pairs.push(result.pair);
    romanNames.push(result.romanName);
    greekNames.push(result.greekName);
    romanSearchResults.push(result.romanSearchResults);
    greekSearchResults.push(result.greekSearchResults);
}
*/




/*
//use .map to create the arrays
let pairs = searchResults.map(function(result){
    return searchResults.pair;
})
*/


//instead of the longer version of map
//let pairs = searchResults.map(result => result.pair)

/*
//make a funciton that will allow for us to filter entries with over 
//1,000,000 search results
function popularGreek(entry) {
    return entry.greekSearchResults > 1000000
    // when the function is used with .filter() funciton, it finds and returns
    // entries that satisfy that criteria
}

function popularRomans(entry) {
    return entry.romanSearchResults > 1000000
    // when the function is used with .filter() funciton, it finds and returns
    // entries that satisfy that criteria
}


//make an array of popular Greek entries
let poppinGreeks = searchResults.filter(popularGreek) //uses the function to 
                                                        // to filter based on
                                                        // criteria

//make an array of popular Greek entries 
let poppinRomans = searchResults.filter(popularRomans) //uses the function to 
                                                        // to filter based on
                                                        // criteria  
*/
// we can also sort and slice the data to filter for the top 10 results
let poppinGreeks = searchResults.sort((a,b) => b.greekSearchResults - a.greekSearchResults)
let poppinRomans = searchResults.sort((a,b) => b.romanSearchResults - a.romanSearchResults)

//slice the data to the first 10 results
poppinGreeks = poppinGreeks.slice(0,10);
poppinRomans = poppinRomans.slice(0,10);

// to plot data, first we need to have our trace info
// use map to pip information straight into trace
let greekTrace = {
    x: poppinGreeks.map(result => result.pair),
    y: poppinGreeks.map(result => result.greekSearchResults),
    text: poppinGreeks.map(result => result.greekName),
    name: "Greek",
    type: "bar"
}

let romanTrace = {
    x: poppinRomans.map(result => result.pair),
    y: poppinRomans.map(result => result.romanSearchResults),
    text: poppinRomans.map(result => result.romanName),
    name: "Roman",
    type: "bar"
}

//create the array for our traces to be plotted together
let data = [greekTrace, romanTrace];

//add teh alyout properties
let layout = {
    title: "Greek vs. Roman Search Results",
    barmode: "group",
    margin:{
        l: 50,
        r: 50,
        b: 200,
        t: 50,
        pad: 4
    }

}

//render the plot to the tag with id= "plot"
Plotly.newPlot("plot", data, layout)
