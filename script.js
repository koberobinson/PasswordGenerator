// Assignment Code
var generateBtn = document.querySelector("#generate");
var enter;
var confirmNumber;
var confirmSpecialCharacter;
var confirmUppercase;
var confirmLowercase;

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
  else if (confirmSpecialCharacter && confirmNumber && confirmUppercase) {
    choices = specialCharacters.concat(specialCharacters, numbers, upperCase);
  }
  else if (confirmSpecialCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(numbers, upperCase);
  }
  else if (confirmSpecialCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(numbers, lowerCase);
  }
  else if (confirmSpecialCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(lowerCase, upperCase);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(lowerCase, upperCase);
  }
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
  } 
  else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);
  } 
  else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);
  } 
  else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);
  } 
  else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
  }






  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


