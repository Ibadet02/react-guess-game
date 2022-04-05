import React from "react"
import Gameboard from "./gameboard"
import About from "./about"
export default function Gamecontainer(props){
    return (
        <div className="gamecontainer">
            <Gameboard
            keyword={props.keyword}
             />
            <About
            textOpacity={props.aboutTextOpacity}
            go={props.aboutTextAnimation}
            aboutPosition={props.aboutPosition}
             />
        </div>
    )
}