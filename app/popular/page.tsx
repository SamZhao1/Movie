import Grid from "../../components/Grid";

const api = process.env.TMDB_API_KEY;

async function getPopularMovies(pageNum:number):Promise<Response> {
  "use server";
  const response:Response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+api+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNum)
  return response.json();
}

export default async function PopularMovies():Promise<JSX.Element> {
  return <div className='container'> <Grid getMovies={getPopularMovies} /> </div>
}