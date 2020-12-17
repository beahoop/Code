// Exercise 1
// The below function does not work. The variable twoPlusTwo gets set to
// undefined. Refactor the function to make it work.

function addNumbers(numberA, numberB) {
  return numberA + numberB ;
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo) // 4

// Exercise 2
// Write a function called yell that logs out an uppercase version of a string.
function yell (a){
return a.toUpperCase()
}

console.log(yell("Cat are cool"))

// Write a function called yell10 that uses your yell function to log out an
// uppercase version of a string 10 times.

for (var c = 0; c < 10; c ++){
  console.log(yell("Cat are cool"))
}


// Exercise 3
// Write a function called longest that returns the longest of two input strings
//or arrays.

function longest(a,b){
if(a.length < b.length){
  return b;
} else {
  return a;
}
}

var string1 = "cats, bird, many dogs";
var string2 = "1, 4, 5";

var result = longest(string1, string2)
console.log(result);
// Exercise 4
// Write a function called isVowel that takes a character (i.e. a string of
// length 1) and returns true if it is a vowel, uppercase or lowercase. The
// function should return false if the character is not a vowel.

function isVowel(letter){
var vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
for (var c = 0; c < vowel.length;c++){
  if (letter === vowel[c]){return true}
  else {return false}
}
}

var runvowel = isVowel("m")
console.log(runvowel)
