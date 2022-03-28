import Key from "./Key";

function Keys(){
    const keys = 'qwertyuiopasdfghjklzxcvbnm'.split("");

    let keys_ele = keys.map((itm, idx)=>
        <Key key={idx} vl={itm}/>
    )

    return(
        <div className="keys">
            {keys_ele}
            <button className={"key submit"}>Enter</button>
            <button className={"key delete"}>Delete</button>
        </div>
    )
}

export default Keys;