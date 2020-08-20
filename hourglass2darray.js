// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let sum = [];
    let ans;
    function add(a, b){
        return a - b;
    } 
    for (let i =0; i < arr.length-2; i++){
        for (let j = 0; j < arr[i].length-2; j++){
         let app = (arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]); 
    
    sum.push(app)
        } 
    }
    sum.sort(add);
    for (let p = 0; p < sum.length; p++){
        ans = sum[0];
        if (sum[p] >= ans){
            ans = sum[p];  
        } else {
            ans = ans;  
        }
    }
    console.log(sum)
    
    return ans;
    }