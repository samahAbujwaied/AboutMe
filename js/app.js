'use strict'
var counter ='0'
var correct='0';
// USER NAME FIRST Q
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

// GENDER SECOUND Q
let gender =prompt('I AM SAMAH Guess What is my Gender F/M 💁 💁‍♂️ :').toUpperCase();
switch (gender) {
    case 'F':
        {alert('right I am Girl');
       
        break;
        }
    case 'M':
        alert('not right I am Girl');
        
        break;

    default:
        alert('Your enterd somthing else ');
        break;
}
// AGR THIRD Q
let age =prompt('Guess what is may age if I born in 1997 🤔 :');
switch (age) {
    case '23':
       {alert('right I am 23 old');
        
        break;}
    default:
        alert('not right I am 23 old');
        break;
}
// COLOR FOURTH Q
let color= prompt('What is my favorite color 💗 :').toLowerCase();
switch (color) {
    case 'pink':
        {
        alert('right my favorite color is pink');
        
        break;
       
        }
    default:
        alert('not right my favorite color is pink');
        break;
}
// PROGRAMMING FIFTH Q
let  prog=prompt('Do I like programming:').toLowerCase();
switch (prog) {
    case 'yes':
        {alert('right ,yes I do');
        
        break;}
    case 'no':
        alert('not right , I am like programming');
        
            break;
    default:
        alert('may you entered somthing else , any way I like programing');
        break;
}
 
// MONEY sixth Q
let flag =false;
  for(let j=1; j<=4;j++)
  {
      let x =parseInt(prompt('Please Guess How much my budget do I have'));
      if(x>=15 && x<=25 && x!=20)
      {
        alert('You are too high');
      }
      else if (x<15 || x>25 && x!=20)
      {
        alert('You are too low');
      }
      else if (x === 20)
      {
        alert('You are right I have 20 dinar');
        flag=true;
       
        break;
      }
      else
      {
          alert('there is somthing wrong or your enter is empty or its text please try again');
      }
  }
  if(flag==false)
  {
    alert('I have 20 dinar');
  }
   
 
  // TAs SEVENTH Q 
  let best=['Ahlam','Emad','Diala','Mohammad','Saja','Sara','Sondos'];
  let na='';
  for(let a=0;a<6;a++)
  {
       na='';
      let gues=prompt('please enter the nama of one of TA').toLowerCase();
      for(let r=0 ; r<best.length;r++)
      {
      if(gues === best[r])
      {
          na=best[r];
          
      }}

      if(na=='')
      { 
          if(a<5){
          alert('please try again ');
          }
          else
          alert('sorry see TAs names Bottom of tha page.');
      }
      else  {
      alert('You are right the ' + na + '  is TA' );
      
      }
      

  }

  // SCORE EIGHTH Q
//   alert('Your score is ' + couter + '12');
//   alert('correct out ' + correct);

if (name != null) 
{
    document.getElementById("demo").innerHTML =
    "Hello " + name + "! How are you today? </br> This is my CV enjoy with read";
  }


  let country=['Italy','Spain','France','Czech','Greece','Belgium','Austria','Netherland','Germany','Syria']
  
  document.getElementById("coun").innerHTML =
    "These country that I visited them "; 

  for(let i=0; i<country.length;i++)
  {
      document.write("<h1> I visited " + country[i]+ "</h1>");
  }

  document.write("<h1> Tha names of TAs </h1>");
 
    
 
  for( let t=0; t<best.length;t++)
  {
      document.write('<h1> ' + best[t] +'</h1>');
  }