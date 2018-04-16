//select elements and create variables
const die = document.querySelector('.die')
const roll = document.querySelector('.roll')
const img = die.querySelector('img')
var x = 0


const players =[
    { player: document.querySelector('.player1'), location: 0},
    { player: document.querySelector('.player2'), location: 0},
    { player: document.querySelector('.player3'), location: 0},
    { player: document.querySelector('.player4'), location: 0}
]

const numPlayers =4
let turn = 0

//definefunctions
//I need to make a movePlayer function
//I need to make a changeTurn function
//I need to make roll die function
function changeTurn(){
    turn  = (turn >= numPlayers -1) ? 0 : turn + 1   //ternary operator
}

// function changeImage(image){
	
// 	$("big_image img").attr("src",image).removeClass("hide_image").addClass("show_image");
// }

//$("#msform").removeAttr("style").hide();
//$("#msform").show();

function movePlayer(turn, num, spots){
    const player = players[turn]

    player.location += num
    if (player.location > 21)
    {
        player.location = 0
        spots[player.location].appendChild(player.player)
        roll.textContent = "Game Over"
        setTimeout(() => {
            roll.textContent = "Player " + turn + " won."
            turn = turn + 1
            while(x < 4){
                turn = (turn >= numPlayers -1) ? 0 : turn + 1
                movePlayer(turn, 22, getSpots())
                console.log("turn = " + turn + " player = " + player + " num = " + num)
                x++;
            } 
        }, 1500)

        setTimeout(() => {
            roll.textContent = "To play again, roll the die."
        }, 1500)
    }
    // player.location = (player.location > 21) ? player.location - 21 : player.location
    
    else{spots[player.location].appendChild(player.player)}
}


function rollDie(){
    roll.textContent = ""
    
    setTimeout(() => {
        const num= Math.ceil(Math.random() * 6)
        if(num == 3){
            img.src = "img/d3.png"
            $("this").css({ "transform": "rotateX(45deg) rotateY(30deg) rotateZ(10deg)" });            
        }
        if(num == 5){
            img.src = "img/d5.png"
            $("this").css({ "transform": "rotateX(45deg) rotateY(10deg) rotateZ(20deg)" });            
        }
        if(num == 1){
            img.src = "img/d1.png"
            $("this").css({ "transform": "rotateX(45deg) rotateY(45deg) rotateZ(30deg)" });
        }
        if(num == 2){
            img.src = "img/d2.png"
            $("this").css({ "transform": "rotateX(180deg) rotateY(90deg) rotateZ(40deg)" });
        }
        if(num == 4){
            img.src = "img/d4.png"
            $("this").css({ "transform": "rotateX(180deg) rotateY(180deg) rotateZ(50deg)" });
        }
        if(num == 6){
            img.src = "img/d6.png"
            $("this").css({ "transform": "rotateX(180deg) rotateY(360deg) rotateZ(60deg)" });
        }
        roll.textContent = "Player " + (turn + 1) + " rolled a " + num
        movePlayer(turn, num, getSpots())
        changeTurn()
        
    }, 1500)
}


//call functions and set event listeners
die.addEventListener('click', e => {
    rollDie()
})