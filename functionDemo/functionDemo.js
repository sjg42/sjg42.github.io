// functions are blocks of code that are designed to perform
// specific tasks

// functions get invoked when they are called up in a script
/*
    function nameoffunction(optional parameters)
    {
        statement(s);
    }
*/


//This function prints text to console
function printHello()
{
    //display a message in the id named "printHello"
    document.getElementById("printHello").innerHTML = "Hello There!"
};

//call the printHello function
printHello();





//this funciton accepts two values as parameters
function addition(a,b)
{
    //a and b are parameters that can be used in the function statements
    //local variable that hodls the sum
    var s = a + b;

    //returnt the calculated value of the sum (local variable)
    return s;
}

//call on the funciton and store the results in a variable
var sum = addition(3,5);

//place the sum into the output in id named 'addition' in our html
document.getElementById("addition").innerHTML = "3 + 5 = <b>" + sum + "</b>";




//JS Built in functions
let longDecimalValue = 123.45356123;
    // use Math.floor() to round a vlaue down
    // use Math.ceil() to round a value up
let roundedDown = Math.floor(longDecimalValue);
let roundedUp = Math.ceil(longDecimalValue);

//Display the rounded values in the id named 'rounded'
//NOTE alt + z wraps text in Visual Studio:)
document.getElementById("rounded").innerHTML = longDecimalValue + " rounded up using .ceil(): <b>" + roundedUp + "</b> <br> " + longDecimalValue + " rounded down using .floor(): <b>" + roundedDown + "</b>";





// array of strings
var fruits = ["Apple", "Orange", "Banana", "Cherry", "Strawberry","Dragonfruit"];

//variable that will hold the string version of the array
var output = "[";

//use a loop to access the items in the array and add to the output string
for (var i = 0; i<fruits.length; i++)
{
    //indexes in array start at 0. i will increase by 1 until we've looped through length of list
    //add on the text to the output
    if (i != fruits.length - 1)
        output += fruits[i] +", "; //if not last index in the array
    else
        output += fruits[i] + "]"; //if we do get to the last index of the array
}
document.getElementById("array1").innerHTML = output



// make an empty array and then generate random numbers to populate the array
var numbers = [];
// use .floor() and .random() to generate a series of values (between 1 and 10)
var count = 5 + Math.floor(Math.random() * 11); // Math.random() generates a decimal between 0
                                            // and 1
                                // multiplying times 11 generates a decimal between 0 and 10 + 5
// use a for loop to add count numbers to the array .push()
for (var i = 0; i <= count; i++)
{
    numbers.push(Math.floor(Math.random() * 100)); // generate a value between 0 and 100 and add to the array
}
// generate the output again
output = "[";
/*
for (var i = 0; i < numbers.length; i++)
{
    if (i != numbers.length - 1)
        output += numbers[i] + ", ";
    else
        output += numbers[i] + "]";
}
*/
// populate using the .forEach() method
numbers.forEach((number, index) => {
    if (index != numbers.length - 1)
        output += numbers[index] + ", ";
    else
        output += numbers[index] + "]";
});
document.getElementById("array2").innerHTML = output;
/*
// function that multiplies a value times 3
function timesThree(value)
{
    return value * 3;
}
*/
// use .map() to apply an inline function to an array and make a copy of the
// array with modified contents
/*var timesThree = numbers.map(function(number){
    return number * 3;
});*/
// can drop the word 'function'
/*var timesThree = numbers.map(number => {
    return number * 3;
});*/
var timesThree = numbers.map(number => {return number * 3});
// generate the output again
output = "[";
// populate using the .forEach() method
timesThree.forEach((number, index) => {
    if (index != timesThree.length - 1)
        output += number + ", ";
    else
        output += number + "]";
});
document.getElementById("array3").innerHTML = output;


// use the .sort() function and pass in a function of sorting attributes
var sorted = numbers.sort(function sortFunciton(a,b){
    //where a and b are values in adjacent sequential indexes
    return b-a; //places the values in descending order
                //when used with the .sort(), if the second number
                //is greater than the first, put in descending order
                // a-b for ascending order
});

// generate the output again
output = "[";
// populate using the .forEach() method
sorted.forEach((number, index) => {
    if (index != sorted.length - 1)
        output += number + ", ";
    else
        output += number + "]";
});
document.getElementById("array4").innerHTML = output;



// can also use .reverse() funciton to reverse order of the elements

//use the .slice() funciton to get a subset of an array
//grab the first 4 items from the sorted array
var sliced = sorted.slice(0,4);

// generate the output again
output = "[";
// populate using the .forEach() method
sliced.forEach((number, index) => {
    if (index != sliced.length - 1)
        output += number + ", ";
    else
        output += number + "]";
});
document.getElementById("array5").innerHTML = output;






