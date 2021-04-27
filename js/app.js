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
alert("Welcome  "+ name);

let gender =prompt('I AM SAMAH Guess What is my Gender F/M 💁 💁‍♂️ :').toUpperCase();
switch (gender) {
    case 'F':
        alert('corret I am Girl')
        break;
    case 'M':
        alert('not corret I am Girl')
        break;

    default:
        alert('Your enterd somthing else ')
        break;
}
let age =prompt('Guess what is may age if I born in 1997 🤔 :');
switch (age) {
    case '23':
        alert('corret I am 23 old')
        break;
    default:
        alert('not corret I am 23 old')
        break;
}
let color= prompt('What is my favorite color 💗 :').toLowerCase();
switch (color) {
    case 'pink':
        alert('corret my favorite color is pink')
        break;
    default:
        alert('not corret my favorite color is pink')
        break;
}

let  prog=prompt('Do I like programming:').toLowerCase();
switch (prog) {
    case 'yes':
        alert('corret ,yes I do')
        break;
    case 'no':
        alert('not correct , I am like programming')
            break;
    default:
        alert('may you entered somthing else , any way I like programing')
        break;
}

if (name != null) 
{
    document.getElementById("demo").innerHTML =
    "Hello " + name + "! How are you today? </br> This is my CV enjoy with read";
  }