console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log('Hello, ' + name);
  return name;
}
// Remember to call the function to test
helloName('Leah');
helloName('Anna');
helloName('Rachel');

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  console.log('Adding two numbers together should look like:', firstNumber + secondNumber);
  let result = firstNumber + secondNumber;
  return result;
}
addNumbers(8, 9);
addNumbers(12, 24);

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2){
  console.log('Here we go with some complicated multiplication', num0 * num1 * num2);
  let answer= num0 * num1 * num2
  return answer;
}
multiplyThree(1, 2, 3);
multiplyThree(5, 10, 15);
multiplyThree(1.33, 2.50, 12.4);

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
}
    else {
    return false;
}
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log(isPositive(-21));
console.log(isPositive(121));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let friends = ['Darío', 'Danny', 'Dayanna'];
function getLast( array ) {
  console.log('the list of names in the array are:', array);
  //returns and removes the last element from an Array
  return friends.pop();
}
console.log(getLast( friends ));


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

let opalSpots= ['under the porch', 'chasing squirrels', 'cuddling', 'eating treats', 'running'];
function find( value, location ){
  let found = false;
  for (let i = 0; i < location.length; i++){
    if (location[i] === value ){
//      console.log('Opal loves to be:', value);
      found = true
}
}
return found
}
console.log(find('eating treats', opalSpots));
console.log(find('running', opalSpots));
console.log(find('under the porch', opalSpots));
console.log(find('in the car', opalSpots));
console.log(find('at the vet', opalSpots));
console.log(find('eating treats', opalSpots));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise

let gemList = ('Opal');
function isFirstLetter (letter, gemList ) {
  return letter === gemList[0] ? true : false;
}

console.log('isFirstLetter - should say false', isFirstLetter('a', gemList))
console.log('isFirstLetter - should say true', isFirstLetter('O', gemList))


// 9. Function to return the sum of all numbers in an array
numbersArray = [12, 14, 15, 1];
function sumAll( numbers ) {
  let sum = 0;
  // TODO: loop to add items
for (let i = 0; i < numbersArray.length; i++){
  sum += numbersArray[i];
}
return sum;
}
console.log(sumAll(numbersArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let values= [21, 3, 2, 13];
function sumPositives (numbers){
  let negatives = [];
  let sum = 0;
  for (let i=0; i < numbers.length; i++) {
    if (numbers[i] < 0){
      negatives.push(numbers[i]);
    } else {
      sum += numbers[i];
}
}
console.log(negatives);
return sum;
}
let heresResult = sumPositives(-10, 12, 1, 12);
console.log(sumPositives(heresResult));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
