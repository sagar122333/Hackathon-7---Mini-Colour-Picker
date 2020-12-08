import React, { Component, useState } from "react";

function Selection(props) {
    const [background, setBackground] = useState({background:''});
    
    return (
        <div className="fix-box" onClick={()=>{
            props.applyColor((nextBackground)=>{
                    setBackground({
                    background:nextBackground.nextBackground})})
        }}
            style={{backgroundColor: background.background}}>
            <h2 className="subheading">Selection</h2>
        </div>
    )
}
export default Selection;
