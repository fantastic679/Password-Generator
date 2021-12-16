////////////////////////////////////////////////////////////////////////////
//                                                                        //
//                          High level functions                          //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

// Trigger password generation on clicking button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  // Generate password
  var password = generatePassword();

  // Display the password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
//                           Low level functions                           //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////

// Generate password
// Based on user input, will determine pool of characters password will be formulated from
// Uses a for loop to randomly select each individual character from this pool
function generatePassword() {
window.passwordLength;
window.includeLowerCase;
window.includeUpperCase;
window.includeNumeric;
window.includeSpecial;
verifyLength();
verifyCharacters();

const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericCharacters = "1234567890";
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passwordCharacters = "";
var generatedPassword = "";
if (window.includeLowerCase == true) {
  passwordCharacters = lowerCaseCharacters;
}
if (window.includeUpperCase == true) {
  passwordCharacters += upperCaseCharacters;
}
if (window.includeNumeric == true) {
  passwordCharacters += numericCharacters;
}
if (window.includeSpecial == true) {
  passwordCharacters += specialCharacters;
}
for (var i = 0; i < window.passwordLength; i++) {
  var index = Math.floor(Math.random() * passwordCharacters.length);
  generatedPassword += passwordCharacters.substring(index, index+1);
}

return(generatedPassword);
}

///////////////////////////////////////////////////////////////////////////

// Verify length
// Accepts numeric password lengths between 8 and 128 inclusive
// If doesn't meet these conditions, alerts user and makes them re-enter
function verifyLength() {
  var numericOnly  = /^[0-9]+$/; // use Regular Expressions to ensure 0-9 characters only
                                 // ^ = start of string
                                 // [0-9]= numeric characters 0-9
                                 // + = at least one character
                                 // $ = end of string
  var userInput = prompt("Please enter numeric value for the password length:",
                         "Only lengths between 8 and 128 inclusive will be accepted.");
  if (userInput >= 8 && userInput <= 128) {
    if (userInput.match(numericOnly) != null) {
      window.passwordLength = userInput;
      console.log("Length: " + window.passwordLength) ////////////////////
    }
  } else {
    alert("Only lengths between 8 and 128 inclusive accepted.");
    verifyLength();
    stop;
  }
}

///////////////////////////////////////////////////////////////////////////

// Verify characters
// Prompts users to choose if they want lowercase, uppercase, numeric, and/or special charcters
// If nothing chosen, alerts user and makes them choose again
function verifyCharacters() {

  // include lower case?
  if (window.confirm("Length: " + window.passwordLength + "\n" + 
                     "Press OK to include at least one lower case character: abc...")) {
    window.includeLowerCase = true;
  } else {
    window.includeLowerCase = false;
  }
  console.log("Lower case included: " + window.includeLowerCase); ////////////////////

  // include upper case?
  if (window.confirm("Length: " + window.passwordLength + "\n" + 
                     "Lower case included: " + window.includeLowerCase + "\n" + 
                     "Press OK to include at least one upper case character: ABC...")) {
    window.includeUpperCase = true;
  } else {
    window.includeUpperCase = false;
  }
  console.log("Upper case included: " + window.includeUpperCase); ////////////////////

  // Include numeric characters?
  if (window.confirm("Length: " + window.passwordLength + "\n" + 
                     "Lower case included: " + window.includeLowerCase + "\n" + 
                     "Upper case included: " + window.includeUpperCase + "\n" + 
                     "Press OK to include at least one numeric character: 123...")) {
    window.includeNumeric = true;
  } else {
    window.includeNumeric = false;
  }
  console.log("Numeric characters included: " + window.includeNumeric); ////////////////////

  // Include special characters?
  if (window.confirm("Length: " + window.passwordLength + "\n" + 
                     "Lower case included: " + window.includeLowerCase + "\n" + 
                     "Upper case included: " + window.includeUpperCase + "\n" +
                     "Numeric characters included: " + window.includeNumeric + "\n" + 
                     "Press OK to include at least one special character: !@#...")) {
    window.includeSpecial = true;
  } else {
    window.includeSpecial = false;
  }
  console.log("Special characters included: " + window.includeSpecial); ////////////////////

  // Makes them choose again if they declined everthing
  if (window.includeLowerCase === false && window.includeUpperCase === false && window.includeNumeric === false && window.includeSpecial === false) {
    alert("Please select at least one type of character.");
    verifyCharacters();
  } else {
    alert("Length: " + window.passwordLength + "\n" + 
          "Lower case included: " + window.includeLowerCase + "\n" + 
          "Upper case included: " + window.includeUpperCase + "\n" +
          "Numeric characters included: " + window.includeNumeric + "\n" +
          "Special characters included: " + window.includeSpecial + "\n")
  }

}

///////////////////////////////////////////////////////////////////////////