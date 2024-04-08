import React from "react";

const message = 'Photo de cheval dans le vent';
const messUser = 'Icone user';

const Image = () => {
    return (
        <div>
            <h2>Image</h2>
            <img src={require(`./image/reactCheval.jpg`)} alt={message} width="500" height="500" />
            <div>
                <img src={require(`./image/userIcon.png`)} alt={messUser} width="80" height="80"></img>
            </div>
        </div>
    );
};

export default Image;