let output = document.getElementById('output');
let left = document.getElementById('left');
let right = document.getElementById('right');
let x = document.getElementById('playerScore');
let y = document.getElementById('cpuScore');

let cpuscore = 0;
let playerscore = 0;

let image = {
	1: "rock",
	2: "paper",
	3: "scissors"
};

let name = prompt("Hey there!! What's your name?");
if (name.trim() != "") {
	document.getElementById('name').innerHTML = name;
}

let updateScore = (player) => {
	let cpu = Math.floor(1 + Math.random() * 3);

	if (cpu == player) {
		declareResult("draw");
	}
	else if ( (cpu == 1 && player == 3) || (cpu == 2 && player == 1) || (cpu == 3 && player == 2) ) {
		y.innerHTML = ++cpuscore;
		declareResult("lose");
	}
	else {
		x.innerHTML = ++playerscore;
		declareResult("win");
	}

	left.src = image[cpu] + ".jpg";
	right.src = image[player] + ".jpg";
};

let declareResult = (status) => {
	output.innerHTML = status.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
	output.className = status;
};
