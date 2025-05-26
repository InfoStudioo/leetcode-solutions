/*
Given a string representing dominoes, 
where each character can be:
'L' (pushed to the left),
'R' (pushed to the right),
'.' (standing upright), determine the final state after all movements.

Input :- "L..R...L.R...R"
*/

function pushDominoes(dominoes){
    const n = dominoes.length;
    const symbols = [];
    const positions = [];

   symbols.push('L');
   positions.push(-1);

 for (let i = 0; i < n; i++) {
    if (dominoes[i] !== '.') {
      symbols.push(dominoes[i]);
      positions.push(i);
     
    }
  }

  symbols.push('R');
  positions.push(n);

  const chars = dominoes.split('');

  for(let i = 0; i< symbols.length - 1; i++) {

    const leftSymbol = symbols[i], rightSymbol = symbols[i + 1];
    const leftPos = positions[i], rightPos = positions[i + 1];

     if (leftSymbol === rightSymbol) {
      for (let k = leftPos + 1; k < rightPos; k++) {
        chars[k] = leftSymbol;
      }
    } else if (leftSymbol === 'R' && rightSymbol === 'L') {
      let l = leftPos + 1, r = rightPos - 1;
      while (l < r){
        chars[l++] = 'R';
        chars[r--] = 'L';
      }
    }


  }

  return chars.join('');

}


// Test cases
console.log(pushDominoes(".L.R...LR..L..")); // Output: "LL.RR.LLRRLL.."
console.log(pushDominoes("RR.L"));          // Output: "RR.L"
console.log(pushDominoes("..R...L..R."));   // Output: "..RR.LL..RR"

console.log(pushDominoes("L..R...L.R...R"));