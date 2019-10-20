import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

it(`Welcome Screen correctly renders`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      gameTime={7}
      numberOfMistakes={4}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
