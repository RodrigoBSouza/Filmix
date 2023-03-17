import { Container, ContainerDetails, ContainerTitle, ContainerOverview, ContainerReleaseTime } from "./styles.SeasonsDetails";
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

function SeasonsDetails() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    
    const {idSeasons} = useParams();
    const [season, setSeason] = useState({});
    const images = "https://image.tmdb.org/t/p/w500/";

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${idSeasons}?api_key=${API_KEY}&language=pt-BR`)
            .then(response => response.json())
            .then(data => {
                const {name, vote_average, overview, poster_path, release_date, runtime} = data;

                const season = {
                    idSeasons, 
                    title: name,
                    average: vote_average,
                    overview: overview,
                    image: `${images}${poster_path}`,
                    releaseDate: release_date,
                    runTime: runtime
                }
                setSeason(season);
            })
        }, [idSeasons, API_KEY])

  return (
    <Container>
        <img src={season.image} alt={season.title}/>
        <ContainerDetails>
            <ContainerTitle>
                <h1>{season.title}</h1>
            </ContainerTitle>

            <ContainerOverview>
               {season.overview}
            </ContainerOverview>

            <ContainerReleaseTime>
                <span>Lançamento: {formatDate(season.releaseDate)}</span>
                <span>Duração: {season.runTime}m</span>
            </ContainerReleaseTime>

            <Link to="/tv/popular" style={linkStyle}>
                <button>Voltar</button>
            </Link>
        </ContainerDetails>
    </Container>
  )
}

export default SeasonsDetails;
