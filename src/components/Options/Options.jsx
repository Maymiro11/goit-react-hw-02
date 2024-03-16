import React from 'react';
import css from './Options.module.css';
import { BsEmojiNeutral,BsEmojiSmile, BsEmojiFrown   } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

const Options = ({ handleClick, total }) => {
    return (
      <ul className={css.optionsButtons}>
        <li>
          <button className={css.button} onClick={() => handleClick('good')}><span>Good <BsEmojiSmile  className={css.icon}/></span></button>
        </li>
        <li>
          <button className={css.button} onClick={() => handleClick('neutral')}><span>Neutral<BsEmojiNeutral   className={css.icon}/></span></button>
        </li>
        <li>
          <button className={css.button} onClick={() => handleClick('bad')}><span>Bad <BsEmojiFrown  className={css.icon}/></span></button>
        </li>
        {total !== 0 && (
          <li>
            <button className={css.resetButton} onClick={() => handleClick('reset')}>Reset <GrPowerReset className={css.iconReset}/></button>
          </li>
        )}
      </ul>
    );
  };

export default Options;
