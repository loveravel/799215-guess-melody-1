import React from 'react';
import PropTypes from 'prop-types';

const GenreQuestionScreen = (props) => {
  const {
    genre,
    answers
  } = props;

  return (
    <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks">
        {answers.map((it, i) => <div className="track" key={i}>
          <button className="track__button track__button--play" type="button"/>
          <div className="track__status">
            <audio/>
          </div>
          <div className="game__answer">
            <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`}/>
            <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
          </div>
        </div>)}

        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  );
};

GenreQuestionScreen.propTypes = {
  genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
};

export default GenreQuestionScreen;
