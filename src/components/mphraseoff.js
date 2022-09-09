import React, {useState} from "react";
import Edit from "../icons/edit-icon.png"

function Mphraseoff(props){
    const [x, setX] = useState(false);
    console.log(x);
    return(
        <aside className="mphrase">
            <input type="checkbox" checked={x} onChange={() => setX(!x)}/>
            <div className="flex-container phrase">
                <div className="container">
                    <img className="edit-ic" src={Edit} alt="" />
                    <p>{x}</p>
                </div>
            </div>
        </aside>
    )
}

export default Mphraseoff