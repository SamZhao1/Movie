import {Grid} from "../../components/Grid";

const api = process.env.TMDB_API_KEY;

async function getTopMovies(pageNum:number):Promise<Response>{
  "use server";

  const response:Response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key='+api+'&language=en-US&page='+pageNum);
  return response.json();
}

export default async function TopMovies():Promise<JSX.Element> {
  return <div className='container'> <Grid getMovies={getTopMovies}/> </div>
}