import React from 'react';

import { checkGuess } from '../../game-helpers';

/*
ex2 Acceptance Criteria:

    [X] A new component should be created, to render previous guesses.
    [X] When the user submits their guess, that value should be rendered within this new component.
    [X] There should be no key warnings in the console!

ex3 Acceptance Criteria:

    [X] Create a new Guess component. 6 instances should be rendered at all times, no matter how many guesses have been submitted.
    [X] The Guess component should render 5 spans, each with the class of cell.
    [X] Each cell should contain a letter, if the Guess instance has been given a value. If not, the cell should be blank.
    [X] Use the NUM_OF_GUESSES_ALLOWED constant, when needed.
    [X] No key warnings in the console.
 
ex4 Acceptance Criteria:

    [X] Import the checkGuess function from /src/game-helpers.js, and use it to validate each of the user's guesses
    [X] When rendering the letters in the Guess component, apply the letter's status to the cell element.
    [X] "Empty" guess slots should have the same markup as before: <span class="cell"></span>.

*/

function Guess({ value, correctAnswer }) {
    return (<p className="guess">
                {checkGuess(value, correctAnswer).map((letter, index) => {
                    let classes = "cell";
                    if (letter.letter != ' ') {
                        classes += " " + letter.status;
                    }
                    return (
                        <span key={index} className={classes}>{letter.letter}</span>
                    );
                })}
            </p>);
}

export default Guess;
