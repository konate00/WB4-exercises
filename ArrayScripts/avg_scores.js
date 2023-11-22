"use strict";

let score = [1,2,5,3]
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

    //Better way to do or short way

function avg(Score){
    let total = 0;
    for (let i=0 ;i< Score.length;i++){
        total += Score[i]
        }

    let average = total / Score.length;
    return average;
}
console.log("My Average: "+ avg(myScores));
console.log("Your Average: "+avg(yourScores))



// }
// function getAverage(myScores) {
//     let sum = 0;

//     // let total = 0;
//     for (let i=0; i < myScores.length; i++) {
//         sum += myScores[i];  // Add up all myScores and give the result

//     return sum / myScores.length; // Divide the sum total by the lenght (7)
//     }
// }

// function getAverage(yourScores) {
//     let sum = 0;

//     for (let i=0; i < yourScores.length; i++) {
//         sum += yourScores[i];  // Add up all Scores and give the result

//     return sum / yourScores.length; // Divide the sum total by the lenght (7)
//     }

// }

// console.log("My average is: " + getAverage(myScores));
// console.log("Your average is: " + getAverage(yourScores));

