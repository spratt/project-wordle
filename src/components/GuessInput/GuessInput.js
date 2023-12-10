import React from 'react';

/*
ex1 Acceptance Criteria:

    [X] Create a new component.
        [X] Don't forget, you can use an NPM script to generate the scaffolding for you! We learn how to do this in the “Getting Started” video
    [X] This component should render a <form> tag, including a label and a text input.
    [X] The text input should be controlled by React state.
    When the form is submitted:
        [X] The entered value should be logged to the console (for now).
        [X] The input should be reset to an empty string.
    [X] The user's input should be converted to ALL UPPERCASE. No lower-case letters allowed.
    [X] The input should have a minimum and maximum length of 5.
        [X] NOTE: The minLength validator is a bit funky; you may wish to use the pattern attribute instead. This is discussed in more detail on the Solution page.

 */

function GuessInput({ makeGuess, disabled }) {
    const [guess, setGuess] = React.useState('');

    function changeGuess(value) {
        if (value.length <= 5) {
            setGuess(value.toUpperCase());
        }
    }

    function submitGuess(event) {
        event.preventDefault();
        if (guess.length === 5) {
            makeGuess(guess);
            setGuess('');
        }
    }
    
    return (<form className="guess-input-wrapper" onSubmit={submitGuess}>
               <label htmlFor="guess-input">Enter guess:</label>
                <input id="guess-input" type="text" pattern="\w{5}" value={ guess } onChange={() => changeGuess(event.target.value)} disabled={disabled} />
            </form>);
}

export default GuessInput;
