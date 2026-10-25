const questions=[
    {
        question:"1.which keyword declare a variable in js?",
        options:["style","let","print","select"],
        answer:"let"
    },
    {
        question:"2.which symbol is used for strict equality?",
        options:["=","==","===","!="],
        answer:"==="
    },
    {
        question:"3.Which HTML tag is used to create a hyperlink?",
        options:["<link>","<a>","<p>","<href>"],
        answer:"<a>"
    },
    {
        question:"4.Which CSS property changes the text color of an element?",
        options:["background-color","color","font-style","text-align"],
        answer:"color"
    },
   {
        question:"5.Which DOM method selects the first element matching a CSS selector?",
        options:["getElementByClassName()","queryselector()","querySelectorAll()","createElement()"],
        answer:"queryselector()"
    },
    {
        question:"6.Which HTML element is used to display an image??",
        options:["<p>","<a>","<img>","<src>"],
        answer:"<img>"
    },
    {
        question:"7.What does DOM stand for in web development?",
        options:["Data Output Method","Digital Order Module","Document Object Model","Document Oriented Method"],
        answer:"Document Object Model"
    },
    {
        question:"8.In CSS flexbox container,which property is used to align flex items along the main axis?",
        options:["align-items","align-content","justify-content","flex-direction"],
        answer:"justify-content"
    }];

    let currentindex=0;
    let score=0;
    let answered=false;

    const question_element=document.getElementById("question");
    const options_element=document.getElementById("options");
    const feedback_element=document.getElementById("feedback");
    const nextbtn=document.getElementById("nextbtn");
    const quiz_element=document.getElementById("quiz");
    const result_element=document.getElementById("result");
    const finalscore_element=document.getElementById("finalscore");
    const message_element=document.getElementById("message");
    const restartbtn=document.getElementById("restartbtn");

    const quiz_head=document.getElementById("h1");
  
    
    function showquestion()
    {
        answered=false;
        
        const currentquestion=questions[currentindex];
        
        question_element.style.display="block";
        
        question_element.textContent=currentquestion.question;

        options_element.innerHTML="";
       
        feedback_element.textContent="";
        nextbtn.disabled=true;
       

        currentquestion.options.forEach(function(option){
            const button=document.createElement("button");
            button.textContent=option;
            button.classList.add("option-btn");
            button.addEventListener("click",function(){
                checkanswer(button,option);
            })
            options_element.appendChild(button);
            
        })


    }

   // checking selected answer is correct

   function checkanswer(selectedbutton,selectedoption)
   {
    if(answered)
    {
        return;
    }
    answered=true;
    const correct_answer=questions[currentindex].answer;

    const allbuttons=options_element.querySelectorAll("button");
    allbuttons.forEach(function(button)
{
    button.disabled=true;
    if(button.textContent===correct_answer)
    {
        button.classList.add("correct");

    }
});

if (selectedoption===correct_answer)
{
    score++;
    feedback_element.textContent="correct answer";
    feedback_element.style.color="green";

    
}else
{
    selectedbutton.classList.add("wrong");
    feedback_element.textContent="Wrong answer!Correct Answer Is:- "+correct_answer;
    feedback_element.style.color="red";
}
nextbtn.disabled=false;

   }

   //moving to next question

   nextbtn.addEventListener("click",function(){
    if(!answered)
    {

        return
    }
    if(currentindex<questions.length-1)
    {
        currentindex++;
        showquestion();
        
    }else
    {
        showresult();
    }
   });

   //display result

   function showresult()
   {
    quiz_head.style.display="none";
    question_element.style.display="none";

    options_element.style.display="none";
    feedback_element.style.display="none";
  

    
    nextbtn.disabled=true;
    nextbtn.style.background="white";
    result_element.style.display="block";
    finalscore_element.textContent="you scored "+score+" out of "+questions.length;
    
     message_element.classList.add("message");




    if(score===8)
    {
        message_element.textContent="👏🏻👏🏻Excellent";
    }
    else if(score>=5)
    {
        message_element.textContent="👏🏻good job.keep practicing";
    }
    else
    {
        message_element.textContent="keep learning"
    }
   }
   
   
   //restarting quiz///

    restartbtn.addEventListener("click", function () {
     currentindex = 0;
      score = 0; 
      answered = false; 
      result_element.style.display = "none";
      quiz_head.style.display="block";
       quiz_element.style.display = "block"; 
      
       question_element.style.display = "block";
        options_element.style.display="block";
       feedback_element.style.display="block";
        nextbtn.disabled = true; nextbtn.style.background = ""; 
        showquestion(); });

        // start quiz
  showquestion();