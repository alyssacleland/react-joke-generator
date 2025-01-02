const endpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

const getJoke = async () => {
  const response = await fetch(endpoint);
  const joke = await response.json();

  console.log(joke);
  return joke;
};

export default getJoke;
