import React from "react";
import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";

export const App = () => {
  return <WelcomeScreen gameTime={7} numberOfMistakes={4} />;
};
