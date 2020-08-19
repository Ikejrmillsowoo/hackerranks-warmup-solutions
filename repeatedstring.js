// Complete the repeatedString function below.
function repeatedString(s, n) {
  let count = 0;
   let newS = '';
   let rc = 0;
   let r = n % s.length;
   let co = (n-r)/s.length;
  for (let i = s.length-1; i >= 0; i--){
      if (s.charAt(i) === 'a') {
          count++;
          if (i < r){
              rc++;
          }
      } 
  }
  
  return (co * count) + rc; 
  }