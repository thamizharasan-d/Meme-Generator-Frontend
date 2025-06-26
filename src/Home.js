import React, { useRef, useState } from "react";
import { toPng } from "html-to-image";
import './Home.css';
import Header from "./Header";

function Home() {
  const [bgImage, setBgImage] = useState(null);
  const editorRef = useRef();
  const [text,usetext] = useState("");
  const [text1,usetext1] = useState("");

  const calltext = (f) =>{
    usetext(f.target.value);
    document.getElementById("tex").innerText = (`${text}`);
  }

  const calltext1 = (f) =>{
    usetext1(f.target.value);
    document.getElementById("tex2").innerText = (`${text1}`);
  }

  const handleImageUpload = (e) => {
  const imageURL = URL.createObjectURL(e.target.files[0]);
  setBgImage(imageURL);
  };

  const downloadImage = () => {
    if (!editorRef.current) return;
    toPng(editorRef.current).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "Meme-image.png";
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div>
        <Header/>
        <div className="container">
            <div ref={editorRef} className="workspace" style={{ backgroundImage: `url(${bgImage})` }}>
                <h2 id="tex">Add Top Text </h2>
                <h2 id="tex2">Add Bottom Text</h2>
            </div>
            <div className="controls">
                <h3>Enter Top Text:</h3>
                <input id="i2" type="text" placeholder='  Type To Edit Top Text' onChange={calltext}></input>
                <h3>Enter Bottom Text:</h3>
                <input id="i3" type="text" placeholder='  Type To Edit Bottom Text' onChange={calltext1}></input>
                <div id="con2">
                    <input id="i1" type="file" accept="image/*" onChange={handleImageUpload} />
                    <label for="i1" id="i11">Upload Image</label>
                    <button id="b1" onClick={downloadImage}>Download Image</button>
                </div>
            </div>
        </div>        
    </div>
  );
}
export default Home;
