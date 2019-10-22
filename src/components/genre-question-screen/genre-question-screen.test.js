import React from 'react';
import renderer from 'react-test-renderer';

import GenreQuestionScreen from './genre-question-screen.jsx';

const mock = {
  genre: `rock`,
  answers: [
    {
      src: ``,
      genre: `rock`,
    },
    {
      src: ``,
      genre: `jazz`,
    },
    {
      src: ``,
      genre: `blues`,
    },
    {
      src: ``,
      genre: `jazz`,
    }
  ]
};

it(`GenreQuestionScreen is rendered correctly`, () => {
  const {
    answers,
    genre,
  } = mock;
  const tree = renderer
    .create(<GenreQuestionScreen
      genre={genre}
      answers={answers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
