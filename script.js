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
// length (8 - 128)
// lowercase, uppercase, numeric, and/or special charcters
// verify input - at least one character type should be selected
  return "PLACEHOLDER PASSWORD";
}

