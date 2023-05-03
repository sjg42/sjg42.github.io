//an array of names of books
let gooseBumpsBooks = ['Monster Blood','It Came From Beneath the Sink',
                        'Why I am Afraid of Bees'];

// array of the number of times I read each book
let timesRead = [3, 6, 4];

//create trace
var trace1 = {
    x: gooseBumpsBooks,
    y: timesRead,
    type: 'bar',
    name: "Dr. A's Reads"
};

//make the array that holdds teh trace
var data = [trace1];

//set the layout information
var layout = {
    title: "Sam's Goosebumps Series Reads"
};

//call Plotly to plot the chart in the id 'plot1'
Plotly.newPlot('plot1', data, layout);


//if there is another reader, add their information
let timesRead2 = [6,3,1];

//make a second trace for the other reader
var trace2 = {
    x: gooseBumpsBooks,
    y: timesRead2,
    type:'bar',
    name: "Other User's Reads"
};

// to make a grouped chart, add the second trace to the array of data
let data2  = [trace1, trace2]

//update the layout
var layout2 = {
    title: "Sam's and the other user's Goosebumps reads"
}

//call plotly to plot the second grouped bar char in the id 'plot2'
Plotly.newPlot('plot2', data2, layout2);