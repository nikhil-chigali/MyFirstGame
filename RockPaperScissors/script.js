let rockbtn = document.getElementById("rock");
let paperbtn = document.getElementById('paper');
let scissorsbtn = document.getElementById('scissors');
let output = document.getElementById('output');
let left = document.getElementById('left');
let right = document.getElementById('right');
let x = document.getElementById('playerScore');
let y = document.getElementById('cpuScore');


let cpuscore = 0;
let playerscore = 0;

/*
	rock = 1
	paper = 2
	scissors = 3
*/

let name = prompt("Hey there!! whats your name?");
if(name!="" || name!=null){
	document.getElementById('name').innerHTML = name;
}

rockbtn.onclick = function(){
	result(1);
};

paperbtn.onclick = function(){
	result(2);
};

scissorsbtn.onclick = function(){
	result(3);
};


let result = (player) =>{
	let cpu = Math.floor(1 + Math.random()*3);
	if(cpu == player){
		draw(cpu);
	}

	else if((cpu == 1 && player == 3) || (cpu == 3 && player == 2) || (cpu == 2 && player == 1)){
		lose(cpu, player);
	}

	else{
		win(player, cpu);
	}
};

let ref = {
	1:"rock",
	2:"paper",
	3:"scissors"
};

let draw = cpu =>{
	output.innerHTML = "Draw";
	output.className = "draw";
	left.src = ref[cpu] + ".jpg";
	right.src = ref[cpu] + ".jpg";
};

let win = (player, cpu) =>{
	output.innerHTML = "You win!!!";
	output.className = "win";
	left.src = ref[cpu] + ".jpg";
	right.src = ref[player] + ".jpg";
	playerscore++;
	x.innerHTML = playerscore;
};
let lose = ( cpu, player) =>{
	output.innerHTML = "You lose!!!";
	output.className = "lose";
	left.src = ref[cpu] + ".jpg";
	right.src = ref[player] + ".jpg";
	cpuscore++;
	y.innerHTML = cpuscore;	
};
