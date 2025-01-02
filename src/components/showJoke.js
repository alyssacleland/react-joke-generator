import React from 'react';
import PropTypes from 'prop-types';

export default function ShowJoke({ joke, btnText }) {
  return (
    // the setup displays when the get a joke or get a new joke button is clicked. it continues to display when the punchline displays as well.
    // below, the punchline displays when the get punchline button is clicked or when the button does not say get punchline. it displays an empty string when the button does not say 'get punchline'.
    <>
      <h1>{joke.setup}</h1>

      <p>{btnText !== 'Get Punchline' ? joke.punchline : ''}</p>
    </>
  );
}

ShowJoke.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string.isRequired,
    punchline: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
