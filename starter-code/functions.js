// Question 1
function maxOfTwoNumbers(x,y) {
  if(x == y){
    return x;
    console.log("the numbers are the same")
  }else if(x > y){
    console.log(x)
  }else{
    console.log(y)
  }
}

// Question 2
function maxOfThree(a,b,c) {
	var large = a;
	 if(a > b && a > c) {
	 	return large;
	 } else if(b > a && b > c) {
	 	large = b;
	 	return large;
	 } else  {
	 	large = c
	 	return large;
	 }
}

// Question 3
function isCharacterAVowel(letter) {
  var letter = letter;
  var vowels = ["a","e","i","o","u"];
  if(vowels.includes(letter) == true){
    return true;
  }else{
    return false;
  }
}

// Question 4
function sumArray() {

}


// Question 4
function multiplyArray() {

}


// Question 5
var numberOfArguments = function(){

}



// Question 6
var reverseString = function (){

};


// Question 7
function findLongestWord () {

}


// Question 8
function filterLongWords () {

}


// Bonus 1
// (hint: `prototype`)


// Bonus 2
function charactersOccurencesCount() {

}
