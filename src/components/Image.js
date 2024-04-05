import React from "react";

const message = 'Photo de cheval dans le vent';

const Image = () => {
    return (
        <div>
            <h2>Image</h2>
            <img src={require(`./image/reactCheval.jpg`)} alt={message} width="500" height="500" />
        </div>
    );
};

export default Image;