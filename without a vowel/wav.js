//(W)ithout (a) (v)iwel (wav)
const prompt = require('prompt-sync')();  
// place text
let inpput = prompt("enter text: ");
console.log("input: " + inpput);
console.log("Output:" + removeVowles(inpput));
// Definition of a function
function removeVowles(string){
string = string.toLowerCase();
string = string.split("");
return string.filter(i=>
i !== 'a' &&
i !== 'e' &&
i !== 'i' &&
i !== 'o' &&
i !== 'u') .join("");
}