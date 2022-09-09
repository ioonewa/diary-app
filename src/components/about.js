import React from "react";
import Hud from "./hud"
import Edit from "../icons/edit-icon.png"
import "../styles/pages/about.css"

function About(){
    return(
        <div className="flex-container">
            <Hud />
            <div className="flex-container4">
                <main className="about">
                    <p className="introduce">App name - this  app was created to help you to organize your time and remember your doings. I am glad you are using this app, <br /> if you have some offers or tips, write me on ioonewa0@gmail.com</p>
                    <span className="info">
                        <p>Start developing time: <strong>06.09.2022</strong></p>
                        <p>End developing time: <strong>--.--.----</strong></p>
                        <p>Was created by <strong>ioonewa</strong></p>
                        <p>Version<strong>1.0.0</strong></p>
                    </span>
                    <p className="thank-words"></p>
                </main>
                <aside className="mphrase">
                    <input type="checkbox"/>
                    <div className="flex-container phrase">
                        <div className="container">
                            <img className="edit-ic" src={Edit} alt="" />
                            <span>Never <br /> give up!</span>
                            {/* fixed it! */}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default About