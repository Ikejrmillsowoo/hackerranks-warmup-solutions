function sockMerchant(n, ar) {
    let res = 0; 
    // order array ascending order.
    let arr = ar.sort();
    for (let i = 0; i < n; i++){
        // if first two are same add to result and move a step ahead to avoid double counts. 
        if(arr[i] == arr[i+1]){
            res++;
            i++;
    }}
    return res;
    }