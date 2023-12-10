import React from 'react';

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
*/

function Guess({ value }) {
    return (<p className="guess">
                {value.split('').map((letter, index) => (
                    <span key={index} className="cell">{letter}</span>
                ))}
            </p>);
}

export default Guess;
