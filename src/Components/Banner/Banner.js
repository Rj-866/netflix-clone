import React, { useEffect, useState } from 'react';
import {API_KEY, imageUrl} from '../../constants/constants';
import axios from '../../axios';
import './Banner.css';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
       axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
           console.log(response.data.results[0])
           setMovie(response.data.results[4])
       })
    }, [])
    return (
        <div
        style={{backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`}}
         className="banner">
            <div className="content">
                <h1 className="title">{movie ? movie.title : ""}</h1>
                <div className="banner_buttons">
                    <button className="button">
                        <PlayArrowIcon fontSize='small' />  Play</button>
                    <button className="button">
                        <AddIcon/> My list</button>
                  
                    
                </div>
                <h1 className="description">{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>

        </div>
    )
}

export default Banner
