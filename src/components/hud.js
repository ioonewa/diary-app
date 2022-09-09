import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/hud.css"

function Hud(){
    const navigate = useNavigate();
    return(
        <div className="menu-bar">
            <div className="links">
                <div className="menu-link home-link" onClick={()=> navigate('/')} >

                </div>
                <div className="menu-link doinglist-link" onClick={()=> navigate('/doing-list')}>
                    
                </div>
                <div className="menu-link about-link" onClick={()=> navigate('/about')} >
                    
                </div>
            </div>
        </div>
    )
}

export default Hud