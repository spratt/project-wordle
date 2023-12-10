import React from 'react';

function GuessInput({ makeGuess }) {
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
    
    return (<form class="guess-input-wrapper" onSubmit={submitGuess}>
               <label for="guess-input">Enter guess:</label>
                <input id="guess-input" type="text" value={ guess } onChange={() => changeGuess(event.target.value)} />
            </form>);
}

export default GuessInput;
