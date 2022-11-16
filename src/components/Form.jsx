import React, {useState} from "react"
import Image from "./Image"


const Form = ()=>{
    const API_URL = "https://api.imgflip.com/get_memes"

    const [text, setText]= useState({
        uppertext: "",
        lowertext: ""
    })
    const handleChange=(e)=>{
        setText({...text, [e.target.name]: e.target.value})
    }
    const [imageURL, setImageURL]=useState(""); 
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(text)
        let max = 99;
        let min = 0;
        let index = Math.floor(Math.random() * (max - min + 1)) + min
    

        fetch(API_URL).then((res)=>res.json())
                    .then((json)=>json.data.memes[index].url)
                    .then((result)=>setImageURL(result))
    }        
    return(
        <div className="container">
            <form className="meme-form" onSubmit={handleSubmit}>
                <div className="input-div">
                    <input type="text" name="uppertext" 
                        value={text.uppertext} onChange={handleChange}  
                    />
                    <input type="text" name="lowertext" 
                        value={text.lowertext} onChange={handleChange} 
                    />
                </div>
                <div><button className="meme-img-btn">New Meme Image</button></div>
            </form>
            <div className="img-container">
                {imageURL!==""&&<Image text={text} imageURL={imageURL}/>}
            </div>
            <div>
                <button></button>
            </div>
        </div>
    )
}
export default Form;