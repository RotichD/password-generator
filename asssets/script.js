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
var charArray = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "?",
  '"',
  "'",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "[",
  "]",
  "{",
  "}",
  "|",
  "~",
];

//The Following four functions return a random position of each respective possible array
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
  var totalPossibleCharacters = []; //Empties array each time new password is generated/new parameters selected
  var length = document.getElementById("passwordLength").value; //sets password length based on user input
  console.log(length);
  if (length < 8 || length > 128) {
    //Validation for password length
    alert("Invalid Entry, number must be between 8-128 please try again");
    return;
  }

  var hasLowerCase = document.getElementById("lowerCheck").checked;
  var hasUpperCase = document.getElementById("upperCheck").checked;
  var hasNumericChar = document.getElementById("numCheck").checked;
  var hasSpecialChar = document.getElementById("specialCharCheck").checked;

  if (!hasLowerCase && !hasUpperCase && !hasNumericChar && !hasSpecialChar) {
    //ensures at least one option is selected
    alert("You need to select at least one option");
    return;
  }

  var passwordString = "";
  var counter = 0;
  //The following four if statements add at least one random character based on type then add the entire array to total possible characters array
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
    //fills in the remaining random characters until it reaches the user's input length
    passwordString =
      passwordString +
      totalPossibleCharacters[
        Math.floor(Math.random() * totalPossibleCharacters.length)
      ];
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
