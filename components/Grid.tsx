"use client";

import { useState, useRef } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import './Grid.css';
import Cards from './Cards'

const baseURL:string = "https://image.tmdb.org/t/p/w500/";

function Grid(props:{getMovies: Function}) :JSX.Element {
    const fetching = useRef<boolean>(false);
    const[pages, setPages] = useState([]);

    let lastPage:number = 0;

    

    const loadMore = async(page:number) => {
        if(!fetching.current){
            try{
                fetching.current = true;
                const data = await props.getMovies(page).then(function(result:{results:[], total_pages:number}) {
                    let newPage = pages.concat(result.results);
                    setPages(newPage);
                    console.log(pages);
                    lastPage = result.total_pages;
                });
            } finally{
                fetching.current = false;
            }
        }
    };

    let interator:number = 0;

    return(
        <InfiniteScroll
            hasMore={true}
            loadMore={loadMore}
            pageStart={0}
        >
            <div className='grid'>
                {
                    pages.map((results:{id:number, poster_path: string, title:string, overview:string}) => (
                        <div key={interator++} className='grid-item'>
                            <Cards image = {baseURL + results.poster_path} title = {results.title} summary = {results.overview} movieID={results.id}/>
                        </div>
                    ))
                }
            </div>
        </InfiniteScroll>
    );
};

export default Grid;