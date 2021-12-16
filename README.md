# Password Generator

## Background

This is a homework task associated with The Coding Bootcamp at the University of Sydney. In this task, we were provided with the backbone of a webpage which aims to randomly generate passwords meeting the user's criteria.  The HTML and CSS elements of the website were not required to be modified.

## Structure and function

The page has a button, which is supposed to run javascript in order to query the specifications to which the user would like their password to be generated and subsequently generate and display this password.

### Triggering password generation on button press

This code was provided to us and was not changed. It makes use of the ```addEventListener``` attribute.

### Querying password specifications

The homework task specified the following password attributes:

* Length of at least 8 characters and no more than 128 characters;
* At least one of the following: lowercase, uppercase, numeric, special characters;

The first of criteria required user free text to be analysed. It can be divided into two parts: ensuring input is numerical, and ensuring input is between the numeric values of 8 and 128. The first of these was produced by matching the user input string with the appropriate regular expression ```/^[0-9]+$/```, which breaks down as follows:

* ```/^``` start of the regular expression;
* ```[0-9]``` numeric characters including digits 0 through to 9;
* ```+``` at least one character;
* ```$/``` end of the regular expression.

The second of these was done simply by interrogating the `length` attribute.

For each of the other criteria, the user was prompted with a prompt where the user elect to opt in or out of any of these criteria. If no criteria was chosen, the user was advised that this was illegal. The user would be return back to the start. In javascript, this was achieved by calling the function from within itself.

### Generating the password

The user's responses to the above queries were stored. These were then used to curate a pool of characters from which the password could be created. For each character for the length specified by the user, a ```for``` loop was employed to randomly select a character from this pool to create a random permutation.

For special characters, [this list from the OWASP](https://owasp.org/www-community/password-special-characters) was used.

### Displaying the password

Again, this code was provided to us and was not changed. It makes use of ```querySelector``` method to select the appropriate element and changing the text contained within the ```value``` attribute.

## Demonstration and screenshot

A live demo of the page can be found at https://fantastic679.github.io/Password-Generator/.

The source code can be found at https://github.com/fantastic679/Password-Generator/.

Here is a screenshot of the website in action.

![Screenshot of Password Generator as of 06/12/2021](/screenshot.png?raw=true)