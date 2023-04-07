let userInput = +prompt("Enter your marks");
let avg = userInput;

for (let i = 0; i < userInput.length; i++) {
    avg += userInput[i][1];
    let avg = (avg + userInput.length);
}

console.log(avg);

if (avg <= 60) {
    console.log('Grade:', 'F');
}
else if (avg >= 61 && avg <= 70) {
    console.log('Grade:', 'D');
}
else if (avg >= 71 && avg <= 80) {
    console.log('Grade:', 'C');
}
else if (avg >= 81 && avg <= 90) {
    console.log('Grade:', 'B');
}
else if (avg >= 91 && avg <= 100) {
    console.log('Grade:', 'A');
}
