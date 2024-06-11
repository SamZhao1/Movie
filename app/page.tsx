import {Grid} from '../components/Grid';
import ScrollUp from '../components/ScrollUp';

const api = process.env.TMDB_API_KEY;

async function getTheatersMovies(page:number):Promise<Response> {
  
    "use server";
    const response:Response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key='+api+'&language=en-US&page='+page);
    return response.json();
  }

export default function PopularMovies():React.ReactNode {
  return( 
    <div className='container'> 
      <Grid getMovies={getTheatersMovies} />
    </div>
  );
}