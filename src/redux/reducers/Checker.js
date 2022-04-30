import {WORDS} from "../../assets/words/Words";

export default  function C_W(word){
    return WORDS.some((x)=>x===word)
}