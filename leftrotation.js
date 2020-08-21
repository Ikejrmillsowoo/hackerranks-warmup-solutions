// Complete the rotLeft function below.
function rotLeft(a, d) {
    let arrCut = a.splice(0, d);
    return a.concat(arrCut);
 }