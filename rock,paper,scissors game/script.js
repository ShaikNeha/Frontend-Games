let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");

const generatecompchoice=()=>{
//rock ,paper,scissor
     const options=["rock","paper","scissor"];
     const randomidx=Math.floor(Math.random()*3);
     return options[randomidx];
};

const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw . Try again";
    msg.style.backgroundColor="black";
};

const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userScore++;
        userscorepara.innerText=userScore;
        console.log("You Win!");
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscorepara.innerText=compScore;
        console.log("You Lose");
        msg.innerText=`You Lose! ${compchoice} beats Your ${userchoice}`;
         msg.style.backgroundColor="red";
    }
};
    
    
const playgame=(userchoice)=>{
    console.log("user choice ",userchoice);
    const compchoice=generatecompchoice();
    console.log("computer choice = ",compchoice);

    if(userchoice===compchoice){
          //draw game
          drawGame(); 
    }else{
         let userWin=true;
         if(userchoice==="rock"){
            userWin=compchoice==="paper"?false:true;
         }else if(userchoice==="paper"){
            userWin=compchoice==="scissors"?false:true;
         }else{
            userWin=compchoice==="rock"?false:true;
         }
         showWinner(userWin,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        // console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});