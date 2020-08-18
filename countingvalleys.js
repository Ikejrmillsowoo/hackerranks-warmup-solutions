// Complete the countingValleys function below.
function countingValleys(n, s) {
    let count = 0;
let currentLevel = 0;
let valley = 0;
for (let i = 0; i < n; i++) {
    if(s[i] === 'U') {
        currentLevel ++;
        if (currentLevel === 0){
            valley++;
        }
    } else {
        currentLevel -= 1;
    }
}
return valley;
}
