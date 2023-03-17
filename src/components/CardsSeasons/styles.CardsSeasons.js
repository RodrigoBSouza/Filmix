import styled from "styled-components";

export const ContentSeasons = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

export const ContainerCard = styled.div`
    gap: 20px;
    width: 240px;
    height: 450px;
    color: #E4E4E4;
    padding: 15px;
    transition: all 0.3s;
    background-color: #222222;
    border-radius: 5px;
    margin-top: 20px;

    &:hover {
        transform: scale(1.05);
    }

    h2 {
        width: 80%;
        font-size: 15px;
        padding: 10px;
        cursor: pointer;
        text-align: center;
    }

    h2:hover{
        opacity: .8;
    }

    @media screen and (max-width: 420px) {
        width: auto;
        height: auto;
    }
`;

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 210px;
        height: 320px;
        cursor: pointer;
        border-radius: 10px;
    }

    img:hover {
        opacity: .9;
    }

    @media screen and (max-width: 420px) {
        img {
            width: 270px;
            height: 380px;
        }
    }
`;

export const ContainerTitleFilm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;