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

/*
Acceptance Criteria:

    [X] If the user wins the game, a happy banner should be shown.
    [X] If the user loses the game, a sad banner should be shown
    [X] When the game is over, the text input should be disabled.
    It's up to you to decide how to structure the banner! Feel free to create new component(s) if you think it's warranted.
*/

function Game() {
    const [state, setState] = React.useState('PLAYING');
    const [numGuesses, setNumGuesses] = React.useState(0);
    const [guesses, setGuesses] = React.useState(
        range(0, NUM_OF_GUESSES_ALLOWED).map(() => ({
            key: crypto.randomUUID(),
            text: '     ',
        }))
    );

    function makeGuess(value) {
        if (state === 'WON' || state === 'LOST') {
            return;
        }
        const newGuesses = [...guesses];
        newGuesses[numGuesses] = {
            key: crypto.randomUUID(),
            text: value,
        };
        setGuesses(newGuesses);
        const newNumGuesses = numGuesses + 1;
        setNumGuesses(newNumGuesses);
        if (value == answer) {
            setState('WON');
            return;
        }
        if (newNumGuesses >= NUM_OF_GUESSES_ALLOWED) {
            setState('LOST');
            return;
        }
    }
    
    return <>
               {/* Header */}
               {/* Banner */}
               {state === 'WON' && (<div className="happy banner">
                                        <p>
                                            <strong>Congratulations!</strong> Got it in
                                            <strong>
                                                {' '}
                                                {numGuesses}
                                                {' '}
                                                guess{numGuesses > 1 ? 'es' : ''}
                                            </strong>.
                                        </p>
                                    </div>)}
               {state === 'LOST' && (<div className="sad banner">
                                         <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
                                     </div>)}
               {/* Board */}
               <div className="guess-results">
                   {guesses.map((guess) => (<Guess key={guess.key} value={guess.text} correctAnswer={answer} />))}
               </div>
               {/* GuessInput */}
               <GuessInput makeGuess={makeGuess} disabled={state !== 'PLAYING'} />
           </>;
}

export default Game;
