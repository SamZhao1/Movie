import Grid from "../../../components/Grid";

export default async function SearchMovie({params}: {params: { slug: string }}):Promise<JSX.Element> {

  const api = process.env.TMDB_API_KEY;

  async function getSearch(pageNum:number):Promise<Response>{
    "use server";
    const response:Response = await fetch('https://api.themoviedb.org/3/search/movie?api_key='+api+'&language=en-US&page='+pageNum + "&include_adult=false&query=" + params.slug);
    return response.json();
  }

  return <div className='container'> <Grid getMovies={getSearch}/> </div>
}