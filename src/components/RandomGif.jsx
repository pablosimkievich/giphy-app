import React, { useState, useEffect } from "react";
import "./randomGif.css";

const api_key = "cEhwT5lGWgEirhupyjXpFFoyFhmjnpDm";

function RandomGif() {
  const [gifUrl, setGifUrl] = useState("");

  async function fetchRandomGif() {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=&rating=g`
    );
    const data = await response.json();
    const gifUrl = data.data.images.fixed_width.url;
    console.log(gifUrl);
    setGifUrl(gifUrl);
  }

  useEffect(() => {
    fetchRandomGif();
  }, []);

  function handleClick() {
    fetchRandomGif();
  }

  return (
    <div className="container">
      <img src={gifUrl} alt="random gif" width="500" height="500" />
      <br />
      <button onClick={handleClick}>New Random Gif</button>
    </div>
  );
}

export default RandomGif;
