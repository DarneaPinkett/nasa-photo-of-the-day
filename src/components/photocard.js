import React from "react";

const Photocard = props => {
    console.log(props);

    return (
        <div key={props.data} className="photo">
        <span>{props.date}</span>
        <img src={props.Img} alt="nasa"/>
        <h1>{props.title}</h1>
        <h3>By: {props.copyright}</h3>
        <p>{props.explanation}</p>
        </div>
    );
};

export default Photocard;