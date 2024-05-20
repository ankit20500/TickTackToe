console.log("welcome to tik tak toe");
let song=new Audio("music.mp3");
let turn ="x";
let gameover=false;

const changeTurn=()=>{
    return turn==="x"? "0":"x";
}

const checkWin=()=>{
    let boxt=document.querySelector(".boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach((e) => {
        let boxtext0 = boxes[e[0]].querySelector(".boxtext").innerText;
        let boxtext1 = boxes[e[1]].querySelector(".boxtext").innerText;
        let boxtext2 = boxes[e[2]].querySelector(".boxtext").innerText;

        if (boxtext0 === boxtext1 && boxtext1 === boxtext2 && boxtext0 !== "") {
            document.querySelector(".turn").innerText = boxtext0 + " won";
            gameover = true;
            document.querySelector(".boximg").getElementsByTagName("img")[0].style.display="block";
        }
    });
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn =changeTurn();
            song.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("turn")[0].innerText="turn for " + turn;
            }
        }
    })
})

let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
    let boxtext=document.querySelectorAll(".boxtext");
    boxtext.forEach((e) => {
        e.innerText = "";
    });
    turn ="x";
    gameover=false;
    document.getElementsByClassName("turn")[0].innerText="turn for " + turn;
    document.querySelector(".boximg").getElementsByTagName("img")[0].style.display="none";
})