let nameOne = "james"
let nameTwo = "James"
console.log(nameOne == nameTwo)

let lowerCase = nameTwo.toLocaleLowerCase();
console.log(lowerCase)

let upperCase = nameTwo.toLocaleUpperCase()
console.log(upperCase)
console.log(upperCase == upperCase);

// How to get the length of a string
let nameThree = "james obi"
console.log(nameOne.length)
console.log(nameThree.length)

// Sub String
// substring - It takes 2 parameters
let pack = nameThree.substring(0,7)
console.log(pack)

// Replace Function
let newName = nameThree.replace("james", "Tinubu")
console.log(newName)

// Concat Function
let fullName = nameOne.concat(" ",nameTwo," ", "Kunle")
console.log(fullName)


// Trim Function - Removes white space from both ends of the string
let greeting = "Good Morning"
let ekele = " Good Morning "
console.log(greeting==ekele)
let trimmed = ekele.trim()
console.log(trimmed)
console.log(greeting == trimmed);

// charAt - Returns the character in a specific position
let position = greeting.charAt(7)
console.log(position)
//readup trimm start or end
//       padding start or end is opposite of trim
//       sub str
//       local storage
//go through the random color codes(task)
//cover strings and strings methods
let frances ="ABCDEFG";
console.log(frances.length);

let change= "I am well doing well";
let change1 = change.replace('well', 'great')
console.log(change1);

let change2= "I am well and well";
let change3 = change2.replace(/well/g, 'great');
console.log(change3);

let text1= 'You are';
let text2= 'Favoured';
let text3= "You are".concat(" ","Favoured" )
// let text3 =text1.concat(" ", text2);
console.log(text3);

//convert an integer to a string b4 Padding
let num=15;
let text= num.toString();//converts the integer toString
let padded =text.padEnd(4,"0");
console.log(padded);

const string = 'Hello';
for (let i = 0; i < string.length; i++) {
  const character = string.charAt(i);
  const unicodeValue = character.charCodeAt(0);
  console.log(character + ': ' + unicodeValue);
}

let char = "Boys"
let unicodeValue= char.charCodeAt(1)
console.log(unicodeValue);

//Split method coverts string to array
let sept ='Frances';
let myArray1= sept.split(",")    // Split on commas
let myArray2=sept.split(" ")    // Split on spaces
let myArray3=sept.split("|")    // Split on pipe

for(let i=0;i<=myArray1.length;i++){
    sept += myArray1[i] + "<br>"

    console.log(sept);
}

// console.log(myArray2);
console.log(myArray3);