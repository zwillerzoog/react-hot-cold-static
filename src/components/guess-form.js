import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {

   
    return (
       console.log("hello from guessform", props.state.guess),
        <form onSubmit={props.onSubmit} name="submittedGuesses"  >
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" onChange={props.onChange} autoComplete="off"
                placeholder="Enter your Guess"/>
            <input type="submit" id="guessButton"className="button"  value="Guess"/>
        </form>
    );
}

