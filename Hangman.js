


//declaring i am starting with 0 guesses
 var guesses = 0
 var chance = " "


var story=['There was once upon a time a man who had a head','then he had a neck' ,'then he had a right arm' ,'then he had a left arm', 'then he had a torso','then he had a right leg','Then he had a left leg','then he lost hangman'];

var words=['ED','HI','DUCK','MATT','GABE','BICKHAM','UGLY','UGLIER','UGLIEST','MEOW','CAT','MATTEY','OSCAR','JAVA','ESPERANTO','STARBUCKS','EDUARDO','BACKHAND','MILK','R',
'DANCE','CALORIES','CHOCOLATE','EXPLORE','LEARN','GO','PUPPY','DEXTER','PICACHU','FALL','SPRING','SUMMER','HIPSTER','POKEMON','BYE','HOLA','ADIOS','CHAO','LULULEMON','BEATBIKE',
'AUTOMATA','PHP','HTML','CSS','JAVASCRIPT','LARAVEL','SQL','DATABASE','NODE','SEQUEL','DREAMBEAVER'];

let answer = words[Math.floor(Math.random() *9999) % words.length];


//showing the letters we used 


let answerCopy = answer
let gabeString = "";
let edString = "";

for(x in answer)
{
   gabeString+= "_ ";
}

document.getElementById("gabe").innerHTML = "<p>" + gabeString + "</p>"

function search(a)
{

    for(x in answerCopy)
    {
        if(a == answerCopy[x]){
            return true
        }
    }
    return false;
}
function alertUserWon()
{
if(answerCopy.length == 0)
       {
           console.log("You won");
           alert("You won loser");
       }
}

function guess(a)
{

   var inString = false;
   console.log(a);
   console.log(answer);
   var split = gabeString.split('');
   for(var i = 0; i < answer.length; i++)
   {
       if(answer[i] == a && search(a)) {
           inString = true;
           split[i*2] = a;
       }
   }

 gabeString = "";
  for(x in split) {
            gabeString += split[x];
    }
    document.getElementById("gabe").innerHTML = "<p>" + gabeString + "</p>"

   if(inString == true)
   {
       var temp = answerCopy.split(a);
       answerCopy = "";
       for(x in temp)
       {
           answerCopy += temp[x];
       }
      
    console.log(answer.length);
        
    console.log(gabeString);

    setTimeout(alertUserWon,1);
       
   }else{
    guesses++;

    document.getElementById("story").innerHTML += "<p>"+ story[guesses-1] +"</p>";
     document.getElementById("guesses").innerHTML = "<p> " + guesses + "  guesses </p>";

    edString += a+" ";


   document.getElementById("ed").innerHTML = "<p>" + edString + "</p>";
   alert("Warning! You just used Guess Number "+ guesses);
    if(guesses>=7)
    {
      alert("you lost loser "+ "The word was "+ " "+ answer);
      window.open("https://www.youtube.com/watch?v=rX7wtNOkuHo","_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400")
       
    }

   }

}

 function hint() {

  window.open("https://www.youtube.com/watch?v=s5-t5Tr6Loc","_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400")
 alert("This should be a good motivation :)");
};





