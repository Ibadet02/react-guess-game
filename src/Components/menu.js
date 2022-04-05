import React from "react"
export default function Menu(props){
    const [styling,setStyling]=React.useState({
        line: "",
        style: {},
        styleInfo: {width:"100%"},
        styleFont: {},
    })
    function changeLines(){
        console.log()
        setStyling(prev=>{
            return {
                ...prev,
                style: prev.line!="change"?{width:"200px"}:{width:""},
                line: prev.line=="change"?"":"change",
                styleFont: prev.line!="change"?{animation:"fontsizeappear .6s forwards"}:{animation:"fontsizedisappear .6s forwards"}
            }
        })
    }
    return (
        <div style={styling.style} className="menu">
            <div className="lines" onClick={changeLines}>
                <div className={`${styling.line} line1`}></div>
                <div className={`${styling.line} line2`}></div>
                <div className={`${styling.line} line3`}></div>
            </div>
            <div style={styling.styleInfo} className="menu-info">
                <div className="home"><button
                 className={`myhomebutton ${props.y.home && 'active'}`}
                 style={styling.styleFont}
                 onClick={()=>props.changeKeyword("comedown","home",props.y.home)}
                 >Home</button></div>
                <div className="about"><button
                 className={`myaboutbutton ${props.y.about && 'active'}`}
                 style={styling.styleFont}
                 onClick={()=>props.changeKeyword("goup","about",props.y.about)}
                 >About</button></div>
            </div>
        </div>
    )
}