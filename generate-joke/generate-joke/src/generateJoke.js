import axios from 'axios';

export const generateJoke = () => {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }

  return axios.get('https://icanhazdadjoke.com', config).then((res) => {
    const joke = res.data.joke;
  document.getElementById('joke').innerHTML = joke;
  // return joke;
  })
}