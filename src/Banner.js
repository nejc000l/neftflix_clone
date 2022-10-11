import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from './axios'
import requst from './Request'
function Banner() {
    const [movie,setMovie] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requst.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            )
            return request 
        }
        fetchData()
    },[])
    console.log(movie)
    function truncate(string,n){
      return string?.length >n ? string.substr(0, n-1)+ '...' : string;

    }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{ truncate(`This is a test  description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga enim temporibus harum cum,
         sed corporis, ut non, voluptates qui at impedit velit ab quaerat.
          Facere nam similique velit quasi!`,150)}</h1>
      </div>
      <div className="banner--fadeButton" />
    </header>
  );
}

export default Banner;
