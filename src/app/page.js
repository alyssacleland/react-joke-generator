'use client';

import React, { useState } from 'react';
import getJoke from '../api/jokeApi';
import ShowJoke from '../components/showJoke';

function Home() {
  // useEffect(() => {
  //   getJoke();
  // }, []);
  // turns out we don't even need this useEffect hook.

  const [joke, setJoke] = useState({});

  const [btnText, setBtnText] = useState('Get A Joke');

  const setButton = (text) => {
    setBtnText(text);
  };

  // when the get a joke button is clicked, setJoke is called and the setup and punchline are set. the button text is set to 'get punchline'.
  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setButton('Get Punchline');
    });
  };

  return (
    <>
      <ShowJoke joke={joke} btnText={btnText} />

      {/* curly braces are used to embed js expresssions within JSX. 

this conditional checks if the button text is one of the following: get a joke or get a new joke. 

if it is (true), then the first button is rendered, which a.) sets button text value and b.) The onClick handler is set to getAJoke, which fetches a new joke and updates the state.

if it is not (false), then the second button is rendered, which a.) sets button text value and b.) The onClick handler is set to setButton, which updates the button text to 'Get A New Joke'. */}

      {btnText === 'Get A Joke' || btnText === 'Get A New Joke' ? (
        <button type="button" onClick={getAJoke}>
          {btnText}
        </button>
      ) : (
        <button type="button" onClick={() => setButton('Get A New Joke')}>
          {btnText}
        </button>
      )}
    </>
  );
}

export default Home;
