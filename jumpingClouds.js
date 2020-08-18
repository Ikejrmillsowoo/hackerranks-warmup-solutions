function jumpingOnClouds(c) {
    // count number of jumps.
    let jump = 0; 
    for (let i = 1; i < c.length; i++){
    //for Minimun number first jump 2 spaces till you hit 1 then back track.
        i++;
        count++
        if(c[i] === 1) {
            i-=1;
            
        }
    }
    return count;
    };