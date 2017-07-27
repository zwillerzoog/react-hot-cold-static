import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default class GuessSection extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
        	attempts: 0,
        	userGuess: '',
        	submittedGuesses: []
        }
    }

    onChange = e => {
    	e.preventDefault();
    	this.setState({
    		[e.target.name]: [e.target.value]
    	});
    }

    onSubmit = e => {
    	e.preventDefault();
    	console.log('FORM SUBMIT');
    	console.log('ARRAY ', this.state.submittedGuesses);
    	console.log('SUBMITTED VALUE', this.state.userGuess);
    	this.setState({
    		[e.target.name]: this.state.submittedGuesses.concat(this.state.userGuess)
    	});
  	}
  
    render(props) {    

    return (
        console.log(' the state from guess section ', this.state),
        <section>
            <h2 id="feedback">{this.feedback}</h2>
            <GuessForm state={this.state} onChange={this.onChange} onSubmit={this.onSubmit}/>
        </section>
    	);
    }
}

