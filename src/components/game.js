import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            attempts: 0,
            guess: '',
            form: ''
                
            }
        }
    // addData() {
    //     Object.assign()
    // }

    render() {
        console.log("GAME STATE", this.state);
    return (
        <div>
            <Header />
            <GuessSection feedback="Make your guess!" state={this.state} addData={this.addData}/>
            <GuessCount count={3} />
            <GuessList guesses={[10, 15, 25]} />
        </div>
    );
}
}

export default Game;
