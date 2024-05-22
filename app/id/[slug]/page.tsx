import MovieDetails from "../../../components/MovieDetails";

import { getServerSession } from "next-auth";

import NextAuth from "next-auth";
import { authOptions } from '../../api/auth/[...nextauth]/route'

import prisma from '../../../components/database'

export default async function SearchMovie({params}: {params: { slug: string }}):Promise<JSX.Element> {

  const session = await getServerSession(authOptions);

  const api = process.env.TMDB_API_KEY;

  async function getSearch(){
    const response:Response = await fetch('https://api.themoviedb.org/3/movie/' + params.slug +'?api_key='+api+'&language=en-US');
    return response.json();
    }

  const data = await getSearch();

  async function checkFav():Promise<Boolean>{

    let userName:string = session?.user?.name;
    let movieID:number = parseInt(params.slug);

    const isFav = await prisma.favorites.findFirst({
      where: {
        movieId: parseInt(params.slug),
      },
    })
    
    if(isFav){
      return true;
    }

    else
      return false;
  }

  const check = await checkFav();

  //console.log('Database Check: ',check);
  //console.log('Server Check:', session?.user);

  return <div className='container'> <MovieDetails details={data} isFav={check} userId = {session?.user.id} /> </div>

}