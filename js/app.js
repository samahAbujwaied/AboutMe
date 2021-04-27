'use strict'

let username = prompt('please enter you are student or TA:').toUpperCase();

switch (username) {
    case 'STUDENT':
       
       alert("Welcome  "+ username);
        
        break;
    case 'TA':
     alert("Welcome  "+ username);
        break;

    default:
    alert("may you enter other choice ");
        break;
}

let name =prompt('What is your name :');
let city= prompt('Where are you from:');
let age =prompt('What is your age :');
let  prog=prompt('Do you like programming:');


if (name != null) 
{
    document.getElementById("demo").innerHTML =
    "Hello " + name + "! How are you today? </br> This is my CV enjoy with read";
  }