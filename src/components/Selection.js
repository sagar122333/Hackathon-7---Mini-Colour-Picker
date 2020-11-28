import React, { Component, useState } from "react";

function Selection(props) {
    const [background, setBackground] =useState({backgroundColor:""});
    
    return (
        <div className="fix-box" onClick={props.applyColor((nextBackground)=>setBackground({backgroundColor:nextBackground}))} style={background}>
            <h2 className="subheading">Selection</h2>
        </div>
    )
}
export default Selection;
