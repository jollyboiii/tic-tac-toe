let turn ="X";
let game=true;
let turnNum=0;
function turnInfo(){
    if (game)
    document.querySelector(".info").textContent=turn + "'s turn";
}
function changeMove(){
    turn=turn==="X" ? "O" : "X";
}
function onClick(){
    
    let sqrs=document.querySelectorAll(".square");
    sqrs.forEach(sqr => {
        sqr.addEventListener('click',(event)=>{
            if(!game)
                return;
            else if (event.target.innerText===""){
                event.target.innerText=turn;
                turnInfo();
                winningCondition()
                changeMove();
            }
            
        })
    });
}
function reset(){
    let clear=document.querySelector(".reset");
    clear.addEventListener('click',()=>{
        let sqrs=document.querySelectorAll(".square")
        sqrs.forEach( sqr =>{
            sqr.innerText="";
        });
        turn="X"
        document.querySelector(".info").textContent="";
        game=true;
        turnNum=0;
    })
}
function winningCondition(){
    let winArr=[
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ];
    for (i=0;i<winArr.length;i++){
        let sqrs=document.querySelectorAll(".square");
        let [a,b,c]=winArr[i];
        if (sqrs[a-1].innerText===turn && 
            sqrs[b-1].innerText===turn &&
            sqrs[c-1].innerText===turn)
            {
                const info=document.querySelector(".info");
                info.textContent= turn + " Won!";
                game=false;
                break;
            }
    }
    turnNum++;
    if (turnNum===9){
        const info=document.querySelector(".info");
        info.textContent= " It's a Tie!";
        game=false;

    }
}
onClick();




