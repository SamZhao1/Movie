import Grid from "../../components/Grid";

async function getPopularMovies(pageNum:number):Promise<Response> {
  "use server";
  const response:Response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=69ee2ff310af9312e9b955dd72585582&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNum)
  return response.json();
}

export default async function PopularMovies():Promise<JSX.Element> {
  return <div className='container'> <Grid getMovies={getPopularMovies} /> </div>
}