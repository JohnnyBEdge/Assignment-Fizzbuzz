'use strict';

//While loop
function usingWhile(){
    let i = 1;
    while(i <= 100){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        } else if(i % 3 === 0){
            console.log("Fizz");
        } else if (i % 5 === 0){
            console.log("Buzz");
        }
        i++
    }
}


//Do...While loop
function usingDoWhile(){
    let i = 1;
    do {
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
            } else if(i % 3 === 0){
                console.log("Fizz");
            } else if (i % 5 === 0){
                console.log("Buzz");
            }
        i++
    } while (i <= 100);
}


//For loop

function usingForLoop(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        } else if(i % 3 === 0){
            console.log("Fizz");
        } else if (i % 5 === 0){
            console.log("Buzz");
        }
    }
}


usingWhile();
usingDoWhile();
usingForLoop();