import React from "react";


export const FileInput = (props) => {
    return (
        <div {...props}>
            <input type='file' accept='image/*' />
            <img id='output' height='200' width='200'/>

        </div>)
}