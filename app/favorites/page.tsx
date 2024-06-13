import { redirect } from "next/navigation";
import { getServerSession } from "next-auth"


import NextAuth from "next-auth";

import prisma from '../../components/database'

import {Cards} from '../../components/Cards'
import './page.css';
import 'bulma/css/bulma.min.css';

const baseURL:string = "https://image.tmdb.org/t/p/w500/";


export default async function FavList(){

    const session = await getServerSession();

    if(!session || !session.user){
        redirect('/top');
    }

    async function getList(){
    
        const list = await prisma.favorites.findMany({
          where: {
            userId: session?.user.id,
          },
          select:{
            movieId: true,
          },
        })
    
        return JSON.stringify(list);
      }

    const data = await getList();
    const parsedData = JSON.parse(data);

    //console.log(parsedData[1].movieId)

    const api = process.env.TMDB_API_KEY;

    async function getSearch(params:{movieId: number}){
      const response = await fetch('https://api.themoviedb.org/3/movie/' + params.movieId +'?api_key='+api+'&language=en-US');
      return response.json();
    }

    let movieList:any = {results:[]};

    for(let i = 0; i < parsedData.length; i++){
      const test = parsedData[i];
      const append = await getSearch(test);
      movieList.results[i] = append;
    }

    //console.log(movieList.results[0]);

    let interator = 0;

    return(
        <div className='container'>
          <div className='grid'>
                {
                    movieList.results.map((results:{id:number, poster_path: string, title:string, overview:string}) => (
                        <div key={interator++} className='grid-item'>
                            <Cards image = {baseURL + results.poster_path} title = {results.title} summary = {results.overview} movieID={results.id}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}