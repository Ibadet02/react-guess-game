import React from "react"
import "../Styles/gameboard.css"
const x=Math.random()
const secretNum=Math.floor(x*100)
export default function Gameboard(props){
    console.log(secretNum)
    const [build,setBuild]=React.useState(
        {
            inputNum: "",
            displayInputNum: "",
            randomNumber: secretNum,
            continue: "check",
            upordown: "",
            isGameOver: false,
            won: ""
        }
    )
    function handleBuild(e){
        setBuild(prev=>{
            const x=(/^[0-9]+$/g).test(e.target.value)
            x?e.target.value=e.target.value:e.target.value=String(e.target.value).slice(0,-1)
            return {
                ...prev,[e.target.name]:e.target.value,
                isGameOver:Number(e.target.value)===prev.randomNumber?true:false
            }
        })
        e.preventDefault()
    }
    function handleDisplay(e){
        document.querySelector("input").select()
        document.querySelector("input").focus()
        setBuild(prev=>{
            if(prev.continue=="again"){
                document.querySelector("input").value=""
                return {
                    inputNum: "",
                    displayInputNum: "",
                    randomNumber: Math.floor(Math.random()*100),
                    continue: "check",
                    upordown: "",
                    isGameOver: false,
                    won: ""
                }
            }
            return prev.isGameOver?{
                ...prev,continue:"again",displayInputNum:prev.inputNum,upordown:"you guessed it!",won:"won"
            }:{
                ...prev,
                [e.target.name]:prev.inputNum,upordown:prev.inputNum!=""?parseInt(prev.inputNum)>prev.randomNumber?"down":"up":""

            }
        })
        e.preventDefault()
    }
    return (
        <div className={`gameboard ${props.keyword}`}>
        <div className="game-wrapper">
            <div className="inputandresult">
                <form>
                    <input
                    type={"text"}
                    onChange={handleBuild}
                    name={"inputNum"}
                    id={"inputNum"}
                    />
                    <input
                    type={"submit"}
                    value={build.continue}
                    onClick={handleDisplay}
                    name={"displayInputNum"}
                    id={"displayInputNum"}
                    />
                </form>
                <div className="displayboard">
                    <span className="userinput">{build.displayInputNum}</span>
                    &nbsp;
                    <span className={`upordown ${build.won}`}>{build.upordown}</span>
                </div>
            </div>
        </div>
        </div>
    )
}