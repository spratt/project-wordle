import React from 'react';

import { sample, range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Guess from '../Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [numGuesses, setNumGuesses] = React.useState(0);
    const [guesses, setGuesses] = React.useState(
        range(0, NUM_OF_GUESSES_ALLOWED).map(() => ({
            key: crypto.randomUUID(),
            text: '     ',
        }))
    );

    function makeGuess(value) {
        if (numGuesses >= NUM_OF_GUESSES_ALLOWED) {
            return;
        }
        const newGuesses = [...guesses];
        newGuesses[numGuesses] = {
            key: crypto.randomUUID(),
            text: value,
        };
        setGuesses(newGuesses);
        setNumGuesses(numGuesses + 1);
        console.log(value);
        if (value == answer) {
            console.log('You win!');
        }
    }
    
    return <>
               {/* Header */}
               {/* Board */}
               <div className="guess-results">
                   {guesses.map((guess) => (<Guess key={guess.key} value={guess.text} />))}
               </div>
               {/* GuessInput */}
               <GuessInput makeGuess={makeGuess} />
           </>;
}

export default Game;
