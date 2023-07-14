import memesData from "../memesData.js";
import data from "../memesData.js";
import React, { useState } from "react";
function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    function clickHandler() {
            const memesArray = allMemeImages.data.memes
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            const url= memesArray[randomNumber].url
            setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: url,
            }))    
    }
  
    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value,
            }
        })
    } 
       return (
        <div className="meme-container">
        <div className="form-container">
            <label>
                <input 
                        type="text" 
                        name="topText" 
                        placeholder="Top Text" 
                        id="form-1"
                        value={meme.topText}
                        onChange={handleChange}
                        />
                <input 
                        type="text" 
                        name="bottomText" 
                        placeholder="Bottom Text" 
                        id="form-2"
                        value={meme.bottomText}
                        onChange={handleChange} 
                        />
                <button onClick={clickHandler} id="btn">Get a new meme image🖼</button>
            </label>
        </div>
        <div className="text-img-container">
            <div id="top-text">{meme.topText}</div>
            <div id="bottom-text">{meme.bottomText}</div>
        <img src={meme.randomImage} alt="" className="img-container" />
        </div>
        </div>
    )
}
export default Meme;