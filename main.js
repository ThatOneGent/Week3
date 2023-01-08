console.log("****** Part 1 ******")
console.log("Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.");
let ages = [3,9,23,64,2,8,28,93];
console.log("Current Ages array")
console.log(ages);
console.log("****** Part 1a ******")
console.log("Programmatically subtract the value of the first element in the array from the value in the last element of the array");
console.log("Last minus first value")
console.log(ages[ages.length-1] - ages[0]);

console.log("****** Part 1b ******")
console.log("Add a new age to your array and repeat the step above to ensure it is dynamic.");

ages.push(Math.floor(Math.random() * 101)); // add a single value thats between 1 and 100
console.log("New random value of " + "'" + ages[ages.length-1] + "'" + " added");

console.log("Last minus first value pt 2");
console.log(ages[ages.length-1] - ages[0]);


console.log("****** Part 1c ******");
console.log("Use a loop to iterate through the array and calculate the average age.");

let totalAge = 0;
let avgAge = 0;

for(let i = 0; i < ages.length; i++){

        totalAge = totalAge + ages[i];
  /*   console.log("curent vaue");
    console.log(ages[i]);
    console.log("new total value");
    console.log(totalAge);
 */
}
avgAge = totalAge/ages.length;

//console.log(totalAge);
//console.log(ages.length);

console.log("average age for current ages array");
console.log(avgAge);

console.log("****** Part 2 ******");
console.log("Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’");

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log("Current names array");
console.log(names);

console.log("****** Part 2a ******");
console.log("Use a loop to iterate through the array and calculate the average number of letters per name.");

let nameLngTotal = 0;
let nameLngAvg= 0;

for(let i = 0; i < names.length; i++){
    
    
    nameLngTotal = nameLngTotal + names[i].length;

  /* console.log("current value");
    console.log(names[i].length);
    console.log("new total value");
    console.log(nameLngTotal); */
 
}

nameLngAvg = nameLngTotal/names.length;
console.log("Average length for current names array");
console.log(nameLngAvg);

console.log("****** Part 2b ******");
console.log("Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.");

let concatNames = "";

for( let i=0; i<names.length; i++){
 // if/else to account for not adding a space at the end of the string, but only in between names.

    if (i< names.length-1) {
        concatNames = concatNames + names[i] + " ";
    }else {
        concatNames = concatNames + names[i];
    }

}

console.log("Concantenated Names from array");
console.log(concatNames);

console.log("****** Part 3 ******")
console.log(" How do you access the last element of any array?");
console.log("arrayName[arrayName.length-1]");

console.log("****** Part 4 ******")
console.log(" How do you access the first element of any array?");
console.log("arrayName[0]");

console.log("******* Part 5 ******");
console.log("Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");

let nameLengths = [];

for(let i=0; i<names.length;i++){

    nameLengths.push(names[i].length);

}

console.log("Current nameLengths array using previous names array");
console.log(nameLengths);

console.log("****** Part 6 ******");
console.log("Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.");
let nameLngSum = 0;
for(let i=0; i<nameLengths.length; i++){
    nameLngSum = nameLngSum + nameLengths[i];
}
console.log("Sum of all elements in nameLengths array");
console.log(nameLngSum);

console.log("****** Part 7 ******");
console.log("Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times");

function conCatMath(word, n){

    let newString ="";
    for(let i = 1; i<=n; i++){
        newString = newString + word;
    }
    return newString;
}
//Random array, word, and value selection
let randomWordArray = ["The","quick","brown","fox","jumped","over","the","lazy","dog"];
let randomWordSelect = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
let randomNumberVal =Math.floor(Math.random() * 11);

console.log("Test of Function 'conCatMath'");
console.log("Random word = " +randomWordSelect);
console.log("Random number (1-10) = "+randomNumberVal);
console.log("Concantenated word function results");
console.log(conCatMath(randomWordSelect,randomNumberVal));

console.log("****** Part 8 ******");
console.log("Write a function that takes two parameters, firstName and lastName, and returns a full name.");

let myFirstName = "Mark";
let myLastName = "P.";

function fullName(firstName,lastName){
    let fullNameVal = "";

    fullNameVal = firstName + " " + lastName;

    return fullNameVal;
}

console.log("Test of Function 'fullName'");
console.log("myFirstName value = " + myFirstName);
console.log("myLastName value = " +myLastName);
console.log("Results of fulName function");
console.log(fullName(myFirstName,myLastName));

console.log("****** Part 9 ******");
console.log("Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.")

function greaterThanABill(numArray){

    let totalArrayVal =0;
    for(let i=0; i<numArray.length; i++){

        totalArrayVal = totalArrayVal + numArray[i];
    }
    console.log("Total Value of passed array = " + totalArrayVal);
    
    if(totalArrayVal > 100){
        return true;
    }else{
        return false;
    }

}

console.log("Test of Function 'greaterThanABill'");

// An array of 5 numbers between 1 & 40 is generated
let testArray = [];
for(let i=1; i <= 5; i++){
    testArray.push(Math.floor(Math.random() * 41));
}
console.log("Test Array containing five random numbers between 1-40 created.");
console.log(testArray);
console.log("Is total greater than 100?");
console.log(greaterThanABill(testArray));

console.log("****** Part 10 ******")

console.log("Write a function that takes an array of numbers and returns the average of all the elements in the array.");

function whatsTheAverage(numArray){
    let arrayTotal = 0;
    let arrayAvg = 0;
    
    for(let i = 0; i < numArray.length; i++){ 
        
        arrayTotal = arrayTotal + numArray[i];

    }
    arrayAvg = arrayTotal/numArray.length;

    return arrayAvg

}
console.log("Test of function 'whatsTheAverage'");

console.log("Average of the previous parts testArray");
console.log(whatsTheAverage(testArray));

console.log("****** Part 11 ******");
console.log("Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");

function dualArrayCompare(firstArray,SecondArray){
    let arrayTotalOne = 0;
    let arrayAvgOne = 0;
    let arrayTotalTwo = 0;
    let arrayAvgTwo = 0;
    
    
    for(let i = 0; i < firstArray.length; i++){ 
        
        arrayTotalOne = arrayTotalOne + firstArray[i];

    }
    arrayAvgOne = arrayTotalOne/firstArray.length;
    
    for(let i = 0; i < SecondArray.length; i++){ 
        
        arrayTotalTwo = arrayTotalTwo + SecondArray[i];

    }
    arrayAvgTwo = arrayTotalTwo/SecondArray.length;

    if(arrayAvgOne>arrayAvgTwo){
        return true;
    } else{
     return false
    }
 }

console.log("Test of function dualArayCompare");

// a second random number array similar to the first one in previous part
let testArrayTwo = [];

for(let i=1; i <= 5; i++){
    testArrayTwo.push(Math.floor(Math.random() * 41));
}

console.log("Second Test Array containing five random numbers between 1-40 created.");
console.log(testArrayTwo);

console.log("Average of the second testArray");
console.log(whatsTheAverage(testArrayTwo));

console.log("Is the first array average higher?");
console.log(dualArrayCompare(testArray,testArrayTwo));

console.log("****** Part 12 ******");
console.log("Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");

function willBuyDrink(isHotOutside,moneyInPocket){

    if(isHotOutside == true && moneyInPocket > 10.5){
        return true;
    }else {
        return false;
    }

}

console.log("Test of Function willBuyDrink");

//random boolean value, and random amount of money in pocket between 10 & 11. 

let isHotValue = Math.random() < 0.5;
let moolaInPocket = (Number((Math.random()).toFixed(2)) + 10);
console.log("Random Boolean value set");
console.log(isHotValue);
console.log("Random Money in pocket between 10-11");
console.log(moolaInPocket);
console.log("Will I buy a drink?");
console.log(willBuyDrink(isHotValue,moolaInPocket));

console.log("****** Part 13 ******");
console.log("Create a function of your own that solves a problem");

// function to create an array filled with random numbers
// First parameter denotes number of elements in array, second denotes 0-x value

function testArrayData(num1,num2){

    //catch incase NaN is passed as a variable
    if(isNaN(num1)||isNaN(num2)){  
    
        return;

    }else{
        //Start array
        let numArray = [];
        //loop cycles number of times based on first passed variable
         for(let i=1; i <= num1; i++){
              numArray.push(Math.floor(Math.random() * (num2+1))); // random whole integer is created and pushed. value is between 0 and second passed variable
         }
         return numArray; // returning of array with numbers
        }



}
// tests of function.
console.log(testArrayData(8,50));
console.log(testArrayData(5,10));
console.log(testArrayData(100,10));
console.log(testArrayData('oops'));