import React from "react";
import "../Styles/about.css"
export default function About(props){
    
    return (
        <div className={`about-container ${props.aboutPosition} ${props.textOpacity}`}>
            <h2 className={`${props.go}`}>Hello, my name is Ibadet</h2>
            <p className={`${props.go}`}>This is a simple estimation game of which the purpuse is to practice my react skills. Enjoy it and try to keep your estimation count smaller :)(the numbers are between 0 and 100)</p>
        </div>
    )
}