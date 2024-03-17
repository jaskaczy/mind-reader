const input = document.querySelector("input");
const btn = document.querySelector("button");
const p = document.querySelector("p");
const loader = document.querySelector(".loader");

let pNumber = null;
let app = () => {
	pNumber = input.value.trim();
	if (pNumber === "") {
		input.placeholder = "imposible";
		return;
	} else if (pNumber > 10) {
		input.value = "";
		input.placeholder = "Its too much for me rn";
		return;
	}
    else if(isNaN(pNumber)){
        input.value =''
        input.placeholder='not a number'
    } else {
		handleInput();
		startLoading();
		musicPlay();
		p.textContent = "Reading your mind.";
		input.placeholder = "";
		setTimeout(() => {
			window.alert(`You thought about a number: ${pNumber}`);
			loader.classList.remove("loading");
			p.textContent = `Think about a number between 1 and 10:`;
			input.placeholder = "...";
		}, 4000);
	}
};
const handleInput = () => {
	pNumber = input.value;
	console.log(pNumber);
	input.value = "";
};
const startLoading = () => {
	loader.classList.add("loading");
};
const musicPlay = () => {
	let audio = new Audio(
		"./audio/SMOKE_-_Cowbell_Cult_Full_Song (mp3cut.net).mp3"
	);
	audio.play();
};

btn.addEventListener("click", app);