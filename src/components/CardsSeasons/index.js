import { ContainerCard, ContainerImg, ContainerTitleFilm } from "./styles.CardsSeasons";
import Header from "../Header";
import React, { useEffect, useState } from "react";
import { ContentSeasons } from "./styles.CardsSeasons";
import { Link } from "react-router-dom";
import SplitBar from "../SplitBar";


function CardsSeasons() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    
    const [seasons, setSeasons] = useState([]);
    const images = "https://image.tmdb.org/t/p/w500/";

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => setSeasons(data.results))

    }, [API_KEY]);

    return(
        <>
            <Header/>
            <SplitBar/>
            <ContentSeasons>
                {seasons.map(season => {
                    return(
                        <ContainerCard key={season.name}>
                            <ContainerImg>     
                                <Link to={`/tv/${season.id}`}>
                                    <img src={`${images}${season.poster_path}`} alt={season.name}/>  
                                </Link>                      
                            </ContainerImg>

                            <ContainerTitleFilm>
                                <h2>{season.name}</h2>
                            </ContainerTitleFilm>
                        </ContainerCard>
                    )
                })}
            </ContentSeasons>
        </>
    )
}

export default CardsSeasons;