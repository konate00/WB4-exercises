"use strict"

// check recording Exo 4 (p 2-17)
// Run first function Before 9min

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
];


// Begin work with a single (current) student

for(let i = 0; i < students.length ; i++){
    let currentStudent = students[i];
    console.log('Student ' + currentStudent.name);

    // console.log(currentStudent.name); // To get students names
    // console.log(currentStudent.scores); // to get the students scores


        // To find the sum of all the scores
    let sumOfAllScores = 0;
    for(let i = 0; i < currentStudent.scores.length; i++){
        let currentScore = currentStudent.scores[i];
        sumOfAllScores += currentScore;
    }
    console.log('This is the sum of all your scores: ' + sumOfAllScores);

    // I should now have the sum of all scores. to get the average divide by the number of scores

    let averageScore = sumOfAllScores / currentStudent.scores.length;
    
    console.log('Has an averge of ' + averageScore.toFixed(2));

} 