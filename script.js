// Trigger password generation on clicking button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  // Prompt for password criteria
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password

  // Generate password
  var password = generatePassword();

  // Display the password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Generate password
function generatePassword() {
window.passwordLength;
verifyLength();
verifyCharacters();
return("PLACEHOLDER PASSWORD length: " + window.passwordLength);
}

// accepts numeric password lengths between 8 and 128 inclusive
// if doesn't meet these conditions, alerts user and makes them re-enter
function verifyLength() {
  var numericOnly  = /^[0-9]+$/; // use Regular Expressions to ensure 0-9 characters only
                                 // ^ = start of string
                                 // [0-9]= numeric characters 0-9
                                 // + = at least one character
                                 // $ = end of string
  var userInput = prompt("Please enter numeric value for the password length",
                         "Only lengths between 8 and 128 inclusive accepted.");
  if (userInput >= 8 && userInput <= 128) {
    if (userInput.match(numericOnly) != null) {
      window.passwordLength = userInput;
    }
  } else {
    alert("Only lengths between 8 and 128 inclusive accepted.");
    verifyLength();
    stop;
  }
}

// prompts users to choose if they want lowercase, uppercase, numeric, and/or special charcters
// if nothing chosen, alerts user and makes them choose again
function verifyCharacters() {
  // include lower case?
  var includeLowerCase;
  if (window.confirm("Length: " + window.passwordLength + "\n" + 
                     "Press OK to include at least one lower case character: abc...")) {
    includeLowerCase = true;
  } else {
    includeLowerCase = false;
  }
  // include upper case?
  var includeUpperCase;
  if (window.confirm("Length: " + window.passwordLength + "\n" + 
                     "Lower case included: " + includeLowerCase + "\n" + 
                     "Press OK to include at least one upper case character: ABC...")) {
    includeUpperCase = true;
  } else {
    includeUpperCase = false;
  }
  // include numeric characters?
  var includeNumeric;
  if (window.confirm("Length: " + window.passwordLength + "\n" + 
                     "Lower case included: " + includeLowerCase + "\n" + 
                     "Upper case included: " + includeUpperCase + "\n" + 
                     "Press OK to include at least one numeric character: 123...")) {
    includeNumeric = true;
  } else {
    includeNumeric = false;
  }
  // include special characters?
  var includeSpecial;
  if (window.confirm("Length: " + window.passwordLength + "\n" + 
                     "Lower case included: " + includeLowerCase + "\n" + 
                     "Upper case included: " + includeUpperCase + "\n" +
                     "Numeric characters included: " + includeNumeric + "\n" + 
                     "Press OK to include at least one special character: !@#...")) {
    includeSpecial = true;
  } else {
    includeSpecial = false;
  }
  // makes them choose again if they declined everthing
  if (includeLowerCase === false && includeUpperCase === false && includeNumeric === false && includeSpecial === false) {
    alert("Please select at least one type of character.");
    verifyCharacters();
  } else {
    alert("Length: " + window.passwordLength + "\n" + 
          "Lower case included: " + includeLowerCase + "\n" + 
          "Upper case included: " + includeUpperCase + "\n" +
          "Numeric characters included: " + includeNumeric + "\n" +
          "Special characters included: " + includeSpecial + "\n")
  }
}

