import { Container, ContainerDetails, ContainerTitle, ContainerOverview, ContainerReleaseTime } from "./styles.Details";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const linkStyle = {
    textDecoration: "none"
}

function formatDate(date){
    if(!date) return false;
    return date.split('-').reverse().join('/');
}

function FilmsDetails() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    
    const {id} = useParams();
    const [film, setFilms] = useState({});
    const images = "https://image.tmdb.org/t/p/w500/";

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => {
                const {title, vote_average, overview, poster_path, release_date, runtime} = data;

                const film = {
                    id, 
                    title: title,
                    average: vote_average,
                    overview: overview,
                    image: `${images}${poster_path}`,
                    releaseDate: release_date,
                    runTime: runtime
                }
    
                setFilms(film);
            })
        }, [id, API_KEY])

  return (
    <Container>
        <img src={film.image} alt={film.title}/>
        <ContainerDetails>
            <ContainerTitle>
                <h1>{film.title}</h1>
            </ContainerTitle>

            <ContainerOverview>
               {film.overview}
            </ContainerOverview>

            <ContainerReleaseTime>
                <span>Lançamento: {formatDate(film.releaseDate)}</span>
                <span>Duração: {film.runTime}m</span>
            </ContainerReleaseTime>

            <Link to="/" style={linkStyle}>
                <button>Voltar</button>
            </Link>
        </ContainerDetails>
    </Container>
  )
}

export default FilmsDetails;
