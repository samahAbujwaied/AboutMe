'use strict'

var counter = parseInt(0)
var correct = parseInt(0);
// USER NAME FIRST Q
function firstQuestion() {
  let username = prompt('please enter you are student or TA:').toUpperCase();
  switch (username) {
    case 'STUDENT': {
      alert("Welcome  " + username);
      counter++;
      correct++;
      console.log('counter ' + counter + ' correct  ' + correct);
      break;
    }
    case 'TA':
      {
        alert("Welcome  " + username);
        counter++;
        correct++;
        console.log('counter ' + counter + ' correct  ' + correct);
        break;
      }
    default:
      alert("may you enter other choice ");
      console.log('counter ' + counter + ' correct  ' + correct);
      break;
  }
}

firstQuestion();

let name = prompt('What is your name :');
alert("Welcome  " + name);
console.log('counter ' + counter + ' correct  ' + correct);


// GENDER SECOUND Q
function secondQuestion() {
  let gender = prompt('I AM SAMAH Guess What is my Gender F/M 💁 💁‍♂️ :').toUpperCase();
  switch (gender) {
    case 'F':
      {
        alert('right I am Girl');
        counter++;
        correct++;
        console.log('counter ' + counter + ' correct  ' + correct);
        break;
      }
    case 'M':
      alert('not right I am Girl');
      counter++;
      console.log('counter ' + counter + ' correct  ' + correct);
      break;

    default:
      alert('Your enterd somthing else ');
      console.log('counter ' + counter + ' correct  ' + correct);
      break;
  }
}

secondQuestion();

// AGR THIRD Q
function thirdQuestion() {
  let age = prompt('Guess what is my age if I born in 1997 🤔 :');
  switch (age) {
    case '23':
      {
        alert('right I am 23 old');
        correct++;
        console.log('counter ' + counter + ' correct  ' + correct);
        break;
      }
    default:
      alert('not right I am 23 old');
      console.log('counter ' + counter + ' correct  ' + correct);
      break;
  }
}

thirdQuestion();

// COLOR FOURTH Q
function fourthQuestion() {
  let color = prompt('What is my favorite color 💗 :').toLowerCase();
  switch (color) {
    case 'pink':
      {
        alert('right my favorite color is pink');
        counter++;
        correct++;
        console.log('counter ' + counter + ' correct  ' + correct);
        break;

      }
    default:
      alert('not right my favorite color is pink');
      console.log('counter ' + counter + ' correct  ' + correct);
      break;
  }
}

fourthQuestion();

  // PROGRAMMING FIFTH Q
  function fifthQuestion() {
    let prog = prompt('Do I like programming:').toLowerCase();
    switch (prog) {
      case 'yes':
        {
          alert('right ,yes I do');
          counter++;
          correct++;
          console.log('counter ' + counter + ' correct  ' + correct);
          break;
        }
      case 'no':
        alert('not right , I am like programming');

        break;
      default:
        alert('may you entered somthing else , any way I like programing');
        break;
    }
  }

  fifthQuestion();

  // MONEY sixth Q
  function sixthQuestion() {
    let flag = false;
    for (let j = 1; j <= 4; j++) {
      let x = parseInt(prompt('Please Guess How much my budget do I have'));
      if (x >= 15 && x <= 25 && x != 20) {
        alert('You are too high');
      }
      else if (x < 15 || x > 25 && x != 20) {
        alert('You are too low');
      }
      else if (x === 20) {
        alert('You are right I have 20 dinar');
        flag = true;
        correct++;
        console.log('counter ' + counter + ' correct  ' + correct);
        break;
      }
      else {
        alert('there is somthing wrong or your enter is empty or its text please try again');
      }
    }
    if (flag == false) {
      alert('I have 20 dinar');
    }
  }

  sixthQuestion();

  // TAs SEVENTH Q 
  function seventhQuestion() {
    let best = ['ahlam', 'emad', 'diala', 'mohammad', 'saja', 'sara', 'sondos'];
    let na = '';
    for (let a = 0; a < 6; a++) {
      na = '';
      let gues = prompt('please enter the nama of one of TA').toLowerCase();
      for (let r = 0; r < best.length; r++) {
        if (gues === best[r]) {
          na = best[r];

        }
      }

      if (na == '') {
        if (a < 5) {
          alert('please try again ');
        }
        else
          alert('sorry see TAs names Bottom of tha page.');
      }
      else {
        alert('You are right the ' + na + '  is TA');
        correct++;
        counter++;
        console.log('counter ' + counter + ' correct  ' + correct);

      }
    }
  }

  seventhQuestion();

  // SCORE EIGHTH Q
  function scoreAlert() {
    alert('Your score is ' + correct + ' / 12');
    alert('correct out ' + counter);
  }

scoreAlert();

  if (name != null) {
    document.getElementById("demo").innerHTML =
      "Hello " + name + "! How are you today? </br> This is my CV enjoy with read";
  }


  let country = ['Italy', 'Spain', 'France', 'Czech', 'Greece', 'Belgium', 'Austria', 'Netherland', 'Germany', 'Syria']

  document.getElementById("coun").innerHTML =
    "These country that I visited them ";

  for (let i = 0; i < country.length; i++) {
    document.write("<h1> I visited " + country[i] + "</h1>");
  }


  document.write("<h1> The names of TAs </h1>");



  for (let t = 0; t < best.length; t++) {
    document.write('<h1> ' + best[t] + '</h1>');
  }
