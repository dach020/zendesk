var MAX = 1000000; 
var primeObj = [(MAX + 1.0)] ;  

function createSieve() {
  for (var i = 0; i <= MAX; i++) {
      primeObj[i] = true ; 
  }
    
  primeObj[1] = false;  

  for (var ctr = 2; ctr * ctr <= MAX; ctr++) {  
    if (primeObj[ctr] == true) {  
      for (var i = ctr * 2; i <= MAX; i += ctr)
          primeObj[i] = false;  
    }  
  }  
}
      
function calculateSummation(n) {  
  var count = 0;
  var num = 1;  
  var sum = 0;  
   
  while (count < n) {  
    if (primeObj[num]) {  
      sum += num;   
      count++;  
    }  
    num++;  
  }
    return sum;  
}

// Input number
var numChoice = 12345;
createSieve();

console.log(`Summation of first ${numChoice} prime numbers is: ` + calculateSummation(numChoice));
