/*
=======================================================

** Week 2 - Project 2 **
*** Looping & Conditionals ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Loops and Iteration Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

or If...Else Documentation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

or While Loop Documentation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while


BASIC TRACK: 1-15
ADVANCED TRACK: 16-20
=======================================================
*/


// 1. Output each item in the following Array to your console:

console.log("Question 1");
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
for (i = 0; i < livingRoom.length; i++)
  {
    var item = livingRoom[i];
    console.log(item);
  }

// 2. Using a loop, log numbers 22-33 in the console.

console.log("Question 2");
var i = 21;
do {
  i += 1;
  console.log(i);
} while (i < 33);

// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.

console.log("Question 3");
var i = 70;
do {
  i += 5;
  console.log(i);
} while (i < 100);

// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.

console.log("Question 4");
var i = 1;
do {
  i += 1;
  console.log("This is how a professional loops.");
  }
  while (i < 6);

// 5. Separately, use both a for loop and while loop to do the same thing.
//     Print out the sentence "At home, I have _____ cats."
//     The numbers should range from 10 to 110, in increments of 25.

  //for loop
  console.log("Question 5 - For Loop")
  var i = 10;

  for (;;) {
    if (i > 110) break;
    console.log("At home, I have " + i + " cats.");
    i+= 25;
  }

  //while loop
  console.log("Question 5 - While Loop")
  var i = -15;
  do {
    i += 25;
    console.log("At home, I have " + i + " cats.");
  } while (i < 110);

// 6. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'

console.log("Question 6")
var numArray = [2, 17, 9, 24, 8];

for (i=0; i<numArray.length; i++)
  {
       var logical = numArray[i];
      if((logical%2 ==0) && (logical>10))
      {
      console.log('even and greater than 10');
          }
else if((logical%2)==0)
  {
    console.log('even');
   }
 else
   {
    console.log('odd');
    }
}

// 7. Using the following Array, create variable called numThrees with the value [13, 23, 33, 43, 53, 63, 73]

console.log("Question 7")
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77]
  //starts at position = 0, value = 13
var numThrees = [];
for (i=0; i<numArray.length; i+=3)
{
	numThrees.push(numArray[i])
}
console.log(numThrees);

// 8. Write a loop that outputs the following to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######

console.log("Question 10");
var count = 0;
	var hashtag = "#";

	while(count < 8) {
		console.log(hashtag)
		hashtag = hashtag + "#"
		count++
	}

// 9. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

console.log("Question 9");
for(i=1; i<=100; i++){
if(i%15 === 0){
    console.log("FizzBuzz");
}
else if(i%3 === 0){
    console.log("Fizz");
}
else if(i%5 === 0){
    console.log("Buzz");
}
else{
    console.log(i);
}
};

// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 10. Use a variable called "human" to prompt the user to type their choice.

  console.log("Question 10");
  var human = prompt("Rock, Paper, or Scissors?");

// 11. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//     For reference:
//     Math.random gives you a random number between 0 and 1, which is different each time you call it.

  console.log("Question 11");
  var computer = Math.random();

// 12. Let's start our conditional statement.
//     If the random computer number falls between 0 and .33, the computer is "rock"
//     If the random computer number falls between .34 and .66, the computer is "paper"
//     If the random computer number falls between .67 and 1, the computer is "scissors"

  console.log("Question 12");
  console.log(computer);
  if(computer <= 0.33){
    console.log("rock")
  }
    else if((computer > 0.33) && (computer <= 0.66)){
      console.log("paper")
    }
      else(
        console.log("scissors"));
      
// 13. Using both "human" and the computer choice, begin another conditional statement to compare them.

//i know this isn't working quite right but not sure why
  console.log("Question 13");
  console.log(human);
  if((human = "rock") && (computer = "scissors")){
    console.log("human wins!")
  }
    else if((human = "paper") && (computer = "rock")){
      console.log("human wins!")
    }
      else if((human = "scissors") && (computer = "paper")){
        console.log("human wins!")
      }
        else if(human === computer){
          console.log("it's a draw!")
        }
            else(
              console.log("computer wins!")
          );
  

// 14. After comparing, determine who has won; the computer or the human!
// 15. Give yourself a high five for completing your first javascript game!
// BONUS: What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.


// ADVANCED TRACK
// 16. Write a conditional statement to find the largest of the numbers in the array provided.
var largestNum = [-5, -2, -6, 0, -1]

// HEADS OR TAILS?
// 17. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)
// 18. Use a do/while loop to keep flipping the coin until you get tails.

// CHESS BOARD
// 19. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// 20. When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.
