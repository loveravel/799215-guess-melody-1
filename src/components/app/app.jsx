import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
/*
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
*/
const App = (props) => {
  const {
    gameTime,
    numberOfMistakes,
  } = props;

  return (
    <WelcomeScreen gameTime={gameTime} numberOfMistakes={numberOfMistakes}/>
  );
};

export default App;

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  numberOfMistakes: PropTypes.number.isRequired,
};
