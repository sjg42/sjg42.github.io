/*
    add event listeners to different items in the page
*/

// use d3.select() and reference an id
let button = d3.select("#clickme"); // use the .css id reference syntax (hashtage)

// associate a funciton with the button being clicked
function handleClick()
{
    //if button is clicked, do the following:
    console.log("You clicked the button!");

    // log the item or id that triggerest the event (expore the code section)
    console.log(d3.event.target);
}

//add the function to the button use .on() function
button.on("click", handleClick); // adds teh funciton to the button
