import React from 'react'

const Image = ({text, imageURL}) => {
  return (
    <div className='image-div' style={{position: "relative"}}>
        <div className='meme-uppertext'>
            <h2>{text.uppertext}</h2>
        </div>
        <div className='meme-img-div'>
            <img src={imageURL} className="meme-img" alt="meme"/>
        </div>
        <div className='meme-lowertext'>
            <h2>{text.lowertext}</h2>
        </div>
    </div>
  )
}

export default Image