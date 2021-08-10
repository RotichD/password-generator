var lowerArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "z",
];
var upperArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"];

function addLower() {
  var position = Math.floor(Math.random() * lowerArray.length);
  return lowerArray[position];
}

function addUpper() {
  var position = Math.floor(Math.random() * upperArray.length);
  return upperArray[position];
}

function addNumeric() {

  var position = Math.floor(Math.random() * numsArray.length);
  return numsArray[position];
}

function addSpecial() {
  var position = Math.floor(Math.random() * charArray.length);
  return charArray[position];
}

function generatePassword() {
  var totalPossibleCharacters = [];
  var length = prompt("Enter a number between 8 - 128");
  console.log(length);
  if (length < 8 || length > 128) {
    alert("Invalid Entry, number must be between 8-128 please try again");
    return;
  }

  var hasLowerCase = confirm("Do you want lowercase characters?");
  var hasUpperCase = confirm("Do you want uppercase characters?");
  var hasNumericChar = confirm("Do you want numeric characters?");
  var hasSpecialChar = confirm("Do you want special characters?");

  var passwordString = "";
  var counter = 0;
  if (hasLowerCase) {
    passwordString = passwordString + addLower();
    totalPossibleCharacters = totalPossibleCharacters.concat(lowerArray);
    counter++;
  }

  if (hasUpperCase) {
    passwordString = passwordString + addUpper();
    totalPossibleCharacters = totalPossibleCharacters.concat(upperArray);
    counter++;
  }

  if (hasNumericChar) {
    passwordString = passwordString + addNumeric();
    totalPossibleCharacters = totalPossibleCharacters.concat(numsArray);
    counter++;
  }

  if (hasSpecialChar) {
    passwordString = passwordString + addSpecial();
    totalPossibleCharacters = totalPossibleCharacters.concat(charArray);
    counter++;
  }
  console.log(passwordString);
  console.log(totalPossibleCharacters);

  for (let i = counter; i < length; i++) {
    passwordString = passwordString + totalPossibleCharacters[Math.floor(Math.random() * totalPossibleCharacters.length)]
  }

  console.log(passwordString);

  return passwordString;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
