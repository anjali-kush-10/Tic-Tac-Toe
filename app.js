let buttons=document.querySelectorAll('.xbox');
let restartGame=document.querySelector('#restart-btn');
let gifContainer=document.querySelector('.gif-container');
let winingMsg=document.querySelector('.msg');

let gameTitle=document.querySelector('.game-title');
let game=document.querySelector('.container');

let turnO=true;

const winningPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


buttons.forEach((xbox)=>{
    xbox.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            xbox.innerHTML="O";
            xbox.style.color = "red";
            turnO =false;
        }
        else{
            xbox.innerHTML="X";
            xbox.style.color = "darkblue";
            turnO= true;
        }
        xbox.disabled=true;
        findWinner();
    });

});


const findWinner=()=>{
    for(let pattern of winningPatterns){
        
        let pos1=buttons[pattern[0]].innerText;
        let pos2=buttons[pattern[1]].innerText; 
        let pos3=buttons[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1==pos2&&pos2==pos3){
                console.log("Winner",pos1);
                   showWinner(pos1);
            }
        }
    }
}

const disabledGame=()=>{
    for(let box of buttons){
        box.disabled=true;
    }

}

const showWinner=(winner)=>{
    winingMsg.innerText=`Congratulations, Winner is ${winner} `;
    gifContainer.classList.remove("hide");
    gameTitle.classList.add("hide"); 
    game.classList.add("hide"); 
    disabledGame();
}

const enableGame=()=>{
    for(let box of buttons){
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame=()=>{
    turnO=true;
    enableGame();
    gifContainer.classList.add("hide");
    gameTitle.classList.remove("hide"); 
    game.classList.remove("hide");    
}


restartGame.addEventListener("click",resetGame);




