import React from 'react';
import css from './Feedback.module.css';


const Feedback = ({ clicks, total, positive }) => {
    return (
        <div className={css.feedbackText}>
  <p>Good:</p><p className={css.feedbackValue}>{clicks.good}</p>
  <p>Neutral:</p><p className={css.feedbackValue}>{clicks.neutral}</p>
  <p>Bad:</p><p className={css.feedbackValue}>{clicks.bad}</p>
  <p>Total:</p><p className={css.feedbackValue}>{total}</p>
  <p>Positive:</p><p className={css.feedbackValue}>{positive}</p>
</div>
    );
  };
export default Feedback;