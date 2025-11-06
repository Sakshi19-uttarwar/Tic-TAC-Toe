const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const msg = document.querySelector(".msg");
const msgContainer = document.querySelector(".msg-container");
const newGameBtn = document.querySelector("#new-btn");

let turn0 = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]


const resetGame = () => {
    turn0 = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("clicked");
        if (turn0){
            box.innerText = "X";
            turn0=false;
        }else{
            box.innerText = "0"
            turn0 = true;
        }
        box.disabled = "true";
        checkWinner();
    });
});

let disabledBoxes = () => {
    for( let box of boxes){
        box.disabled = true;
    }
}


let enabledBoxes = () => {
    for( let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () =>{
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
               showWinner(pos1Val);
            }
        }
    }
}


newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);
