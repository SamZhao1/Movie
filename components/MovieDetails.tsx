"use client";

import {AddRemoveButton} from "./AddRemoveButton";
import './MovieDetails.css';

const baseURL:string = "https://image.tmdb.org/t/p/w500/";

interface MovieProps{
    details:{
        id:number,
        poster_path:string,
        original_title:string,
        overview:string,
        release_date:string,
        runtime:number,
        genres:[{id:number, name:string}]
    }

    isFav:Boolean,
    userId:number
}

export const MovieDetails = ({details, isFav, userId}:MovieProps): JSX.Element => {

    let genreList:string[] = [];

    details.genres.forEach(function (value:{id:number, name:string}, index:number) {
        if(index >= details.genres.length - 1){
            genreList.push(value.name);
        }
        else genreList.push(value.name+',');
      }); 

    return (
        <div className="movieDetails">
            <div className="info">
                <img src={baseURL + details.poster_path} alt="Blank" />
            </div>
           
            <div className="info">
                <h1 className='card-title title'>{details.original_title}</h1>
                <p className='card-text subtitle'>{details.release_date}</p>
                <p className='card-text subtitle'>{details.runtime} minutes</p>
                <p className='card-text subtitle'>{genreList}</p>
                <p className='card-text subtitle is-4'>{details.overview}</p>
            </div>

            <AddRemoveButton movieID={details.id} isFav={isFav} userId = {userId}/>
        </div>
    )
}