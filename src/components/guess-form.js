import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {editing: false};

    }
    onSubmit(event, text, props) {
        event.preventDefault();
        this.setState({
            ...this.state, 
            {textInput: this.state.textInput},
            guessInput
    })
    }

    onChange() {
        this.setState({textInput: ''})
    }

    render() {
   
    return (
       //console.log("hello from guessform", props.state.carrots),
        <form>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" ref={input => this.textInput = input}/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
}
}

