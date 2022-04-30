const rootReducer=(state, action)=>{

    let activeGuess = state.guesses[state.try];
    let newGuesses = state.guesses;

    switch (action.type){

        case "ToggleHelp":

            let nS ={
                ...state,
                help: !state.help
            }

            return nS;

        case "inputLetter":
            let nL;

            if(!state.end){
                const index = activeGuess.indexOf('');
                let wn = false;
                if(activeGuess.includes("" && index < state.answer.length)){
                    activeGuess[index]=action.val;
                }else{
                    wn = true;
                }
            }

            newGuesses[state.try]=activeGuess;

            nL={
                ...state,
                guesses:newGuesses,
                change:!state.change,
                press: !state.press
            };


            return nL;

        case "Delete":
            let nD;

            if (!state.end) {
                let wn = false;
                let item;
                let stop = false;

                for (let i = activeGuess.length - 1; 0 <= i; i--) {
                    if (!stop) {
                        if (activeGuess[i] !== '') {
                            item = activeGuess[i];
                            stop = true;
                        }
                    }
                }

                if(activeGuess.indexOf('')===0){
                    wn=true;
                }

                const index = activeGuess.lastIndexOf(item);
                activeGuess[index]='';

                newGuesses[state.try]=activeGuess;

                nD={
                    ...state,
                    guesses: newGuesses,
                    change: !state.change,
                    warn: wn,
                    press: !state.press

                };

                return nD;

            }

            break;

        case "submitGuess":
            let newTry = state.try+1;
            let win = state.win;
            let end = state.end;
            let addLetters = state.guessed;
            let nGs;

            if(activeGuess.indexOf('')===-1 && !state.end) {
                newGuesses[state.try] = activeGuess;
                addLetters = addLetters + activeGuess.join('');
                if (newGuesses[state.try].join('') === state.answer.join('')) {
                    win = true;
                    end = true;
                }

                if (newTry === 6) {
                    end = true;
                    if (!win) {
                        // input lose code
                    }
                }

                nGs = {
                    ...state,
                    guesses: newGuesses,
                    try: newTry,
                    change: !state.change,
                    win: win,
                    end: end,
                    guessed: addLetters,
                    warn: false,
                    press: !state.press
                }
                return nGs;
            }else{
                nGs={
                    ...state,
                    warn: true,
                    press: !state.press
                }
                return nGs;
            }



        default: {
            return state;
        }
    }
}

export default rootReducer;