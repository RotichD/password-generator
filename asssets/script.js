// Assignment code here
function generatePassword() {
  var length = prompt("Enter a number between 8 - 128");
  console.log(length);
  if (length < 8 || length > 128) {
    alert("Invalid Entry, please try again");
    if (length == null) {
      return;
    }
    generatePassword();
  }
  
  var hasLowerCase = confirm("Do you want lowercase characters?");
  var hasUpperCase = confirm("Do you want uppercase characters?");
  var hasNumericChar = confirm("Do you want numeric characters?");
  var hasSpecialChar = confirm("Do you want special characters?");
  
  console.log(length);
var passwordString = "";

  for (let i = 0; i < length; i++) {
    var char = Math.random() * (122 - 97) + 97;
    var result = String.fromCharCode(char);
    console.log(char);
    console.log(result);
    passwordString = passwordString + result;
    
  }
console.log(passwordString);

  return "password123";
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
