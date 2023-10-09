import { generateJoke } from './generateJoke';
import './styles/main.scss';
import laughing from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

// log to console joke
// const getJoke = async () => {
//   const joke = await generateJoke();
//   console.log(joke);
// };

// getJoke();
