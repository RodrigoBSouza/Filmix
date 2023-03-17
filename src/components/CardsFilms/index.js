import { ContentFilms, ContainerCard, ContainerImg, ContainerTitleFilm } from "./styles.CardsFilms";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const linkStyle = {
    textDecoration: "none"
}

function CardsFilms() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    
    const [films, setFilms] = useState([]);
    const images = "https://image.tmdb.org/t/p/w500/";

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => setFilms(data.results))

    }, [API_KEY]);

    return(
        <ContentFilms>
            {films.map(film => {
                return(
                    <Link to={`/details/${film.id}`} style={linkStyle} key={film.id}>
                        <ContainerCard>
                            <ContainerImg>
                                <img src={`${images}${film.poster_path}`} alt={film.title}/>                           
                            </ContainerImg>

                            <ContainerTitleFilm >
                                <h2>{film.title}</h2>
                            </ContainerTitleFilm>
                        </ContainerCard>
                    </Link>   
                )
            })}
        </ContentFilms>
    )
}

export default CardsFilms;