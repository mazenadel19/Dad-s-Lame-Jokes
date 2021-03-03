const btn = document.querySelector('button');
const img = document.querySelector('img');
const sections = document.querySelectorAll('section');
let index = 1;

sections[0].style.height="100%"
sections[1].style.display='none'
sections[2].style.display='none'

const headers = { headers: { Accept: 'application/json' } };
let isClicked = false;


const getJoke = async () => {
	if (!isClicked) {
		let response = await axios.get('https://icanhazdadjoke.com', headers);
		let newJoke = response.data.joke;
		// console.log(newJoke);

		document.querySelector('#jokeBox').textContent = newJoke;

		if (index >= 4) {
			img.setAttribute('src', `imgs/${index}.jpg`);
			index = 1;
		} else {
			img.setAttribute('src', `imgs/${index}.jpg`);
			index++;
		}

		isClicked = true;
	}
};

btn.addEventListener('click', getJoke);
btn.addEventListener('click', () => {
	if (!isClicked) {

		sections[0].style.height="20%"
		sections[1].style.display='flex'
		sections[2].style.display='flex'
		isClicked = true;
		var snd = new Audio('music/badJoke.mp3');
		btn.disabled = true;
		btn.style.cursor = 'not-allowed';

		setTimeout(() => {
			snd.play();
			btn.disabled = false;
			isClicked = false;
			btn.style.cursor = 'pointer';
		}, 3000);
	}
});
