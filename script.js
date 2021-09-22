// Assignment Code
var generateBtn = document.querySelector("#generate");
var enter;
var confirmNumber;
var confirmSpecialCharacter;
var confirmUppercase;
var confirmLowercase;
var choices

specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "U", "R", "S", "T", "U", "V", "W", "X", "y", "Z"];

lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



// Write password to the #password input
function writePassword() {

  enter = parseInt(prompt("Choose a number between 8 and 128."));

  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("Number has to be between 8 and 128."));
  } else {

    confirmNumber = confirm("Will password this contain Numbers?");
    confirmSpecialCharacter = confirm("Will this password contain Special Characters?");
    confirmUppercase = confirm("WIll this password contain Upper Case Letters?");
    confirmLowercase = confirm("Will this password contain Lower Case Letters?");

  };

  if (!confirmSpecialCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose atleast 1 of the criteria.")
  }
  else if (confirmSpecialCharacter && confirmNumber && confirmLowercase && confirmUppercase) {
    choices = specialCharacters.concat(numbers, upperCase, lowerCase);
  }
  else if (confirmSpecialCharacter && confirmNumber && confirmUppercase) {
    choices = specialCharacters.concat(specialCharacters, numbers, upperCase);
  }
  else if (confirmSpecialCharacter && confirmNumber && confirmUppercase) {
    choices = specialCharacters.concat(numbers, upperCase);
  }
  else if (confirmSpecialCharacter && confirmNumber && confirmLowercase) {
    choices = specialCharacters.concat(numbers, lowerCase);
  }
  else if (confirmSpecialCharacter && confirmLowercase && confirmUppercase) {
    choices = specialCharacters.concat(lowerCase, upperCase);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = numbers.concat(lowerCase, upperCase);
  }
  else if (confirmSpecialCharacter && confirmNumber) {
    choices = specialCharacters.concat(numbers);
  }
  else if (confirmSpecialCharacter && confirmLowercase) {
    choices = specialCharacters.concat(lowerCase);
  }
  else if (confirmSpecialCharacter && confirmUppercase) {
    choices = specialCharacters.concat(upperCase);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = lowerCase.concat(numbers);
  }
  else if (confirmLowercase && confirmUppercase) {
    choices = lowerCase.concat(upperCase);
  }
  else if (confirmNumber && confirmUppercase) {
    choices = numbers.concat(upperCase);
  }
  else if (confirmSpecialCharacter) {
    choices = specialCharacters;
  }
  else if (confirmNumber) {
    choices = numbers;
  }
  else if (confirmLowercase) {
    choices = lowerCase;
  }
  else if (confirmUppercase) {
    choices = upperCase;
  };

  var password = [];

  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);

    var ps = password.join("");
    UserInput(ps);
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
