import React from "react";
import Gamecontainer from "./Components/gamecontainer";
import Menu from "./Components/menu";
import "./Styles/style.css"
function App() {
  const [keyword,setKeyword]=React.useState(
    {
      aboutPosition: "",
      aboutTextAnimation: "",
      aboutTextOpacity: "",
      gamePosition:"comedown",
      isActive:{home:true,about:false}
    })
  function handleEverything(goCome,buttons,y){
    return y==false?setKeyword(prev=>{
      return {...prev,aboutTextAnimation:"go",gamePosition:goCome,isActive:{home:buttons=="home"?true:false,about:buttons=="about"?true:false},aboutTextOpacity:buttons=="home"?"opacitygo":"",aboutPosition:goCome=="goup" && keyword.isActive.home==true?"comedown":"goup"}
    }):setKeyword(prev=>({...prev}))
  }
  return (
    <div className='container'>
      <Menu
        changeKeyword={(x,z,y)=>handleEverything(x,z,y)}
        y={keyword.isActive}
      />
      <Gamecontainer
        aboutTextOpacity={keyword.aboutTextOpacity}
        aboutTextAnimation={keyword.aboutTextAnimation}
        aboutPosition={keyword.aboutPosition}
        keyword={keyword.gamePosition}
      />
    </div>
  );
}
export default App;