import initState from "../store/initState";
import C from "./Checker";

const rootReducer=(state, action)=>{

    let activeGuess = state.guesses[state.try];
    let newGuesses = state.guesses;

    switch (action.type){

        case "toggleHelp":

            let nH ={
                ...state,
                help: !state.help
            }

            return nH;

        case "toggleTheme":

            let nT ={
                ...state,
                theme: !state.theme
            }

            return nT;

        case "toggleAbout":

            let nA ={
                ...state,
                about: !state.about
            }

            return nA;

        case "newGame":
            const newState = initState();
            let nG = {
                try: newState.try,
                guesses: newState.guesses,
                answer: newState.answer,
                guessed: newState.guessed,
                change: newState.change,
                end: newState.end,
                win: newState.win,
                warn: newState.warn,
                press: newState.press,
                help: false
            }

            return nG;



        case "inputLetter":
            let nL;

            if(!state.end){
                const index = activeGuess.indexOf('');
                if(activeGuess.includes("" && index < state.answer.length)){
                    activeGuess[index]=action.val;
                }else{
                    let letterBlock = document.getElementById('guesses').children[state.try].children[4];
                    letterBlock.style.animation = 'boxVibrate 0.3s 1';
                    setTimeout(function() {
                        letterBlock.style.animation = 'none';
                    }, 300);
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
                if (activeGuess.indexOf('') === 0) {
                    let letterBlock = document.getElementById('guesses').children[state.try].children[0];
                    letterBlock.style.animation = 'boxVibrate 0.3s 1';
                    setTimeout(function () {
                        letterBlock.style.animation = 'none';
                    }, 300);
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


            if(activeGuess.indexOf('')===-1 && !state.end && C(newGuesses[state.try].join(''))) {
                newGuesses[state.try] = activeGuess;
                addLetters = addLetters + activeGuess.join('');

                for (let i = 0; i < 5; i++) {
                    let color = 'transparent';

                    if (newGuesses[state.try][i] === state.answer[i]) {
                        color = '#538D4E';
                    } else if (state.answer.indexOf(newGuesses[state.try][i]) !== -1) {
                        color = '#B59F3B';
                    } else {
                        color = '#3B3A3D';
                    }
                }



                for (let j = 0; j < 27; j++)

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