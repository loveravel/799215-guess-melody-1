import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = ()=> {
  const GameOptions = {
    time: 7,
    mistakes: 4,
  };

  ReactDOM.render(
      <App
        gameTime={GameOptions.time}
        numberOfMistakes={GameOptions.mistakes}
      />,
      document.querySelector(`.main`)
  );
};

init();
