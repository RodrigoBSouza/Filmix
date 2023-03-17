import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: auto;
    margin-top: 2rem;
    width: 70%;
    gap: 30px;
    padding: 20px;
    color: #E4E4E4;
    border-radius: 10px;
    background-color: #222222;

    img {
        width: 350px;
        border-radius: 10px;
    }

    @media screen and (max-width: 420px) {
        width: 90%;
        display: block;

        img {
            display: flex;
            margin: auto;
            margin-bottom: 20px;
            width: 250px;
        }
    }
`;

export const ContainerDetails = styled.div`
    button {
        display: flex;
        justify-content: flex-end;
        width: auto;
        border: none;
        border-radius: 5px;
        padding: 5px 25px;
        font-size: 17px;
        background-color: #2b2b2b;
        color: #E4E4E4;
        cursor: pointer;
        margin-top: 30px;
    }

    button:hover {
        opacity: .8;
    }

    @media screen and (max-width: 420px) {
        button {
            margin: auto;
            margin-top: 30px;
        }
    }

`;

export const ContainerTitle = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 2rem;
        text-align: center;
    }

    span {
        font-size: 20px;
    }

`;

export const ContainerOverview = styled.p`
    font-weight: 300;
    font-size: 22px;
    max-width: 95%;
    margin-top: 30px;
    margin-bottom: 10px;

    span {
        font-weight: 500;
    }
`;

export const ContainerReleaseTime = styled.div`
    display: flex;

    span {
        display: flex;
        align-items: center;
        width: auto;
        height: 30px;
        margin-right: 10px;
        margin-top: 20px;
        padding: 5px;
        border-radius: 5px;
        background-color: #111;
    }

    @media screen and (max-width: 420px) {
        span {
            height: auto;
            padding: 5px;
            text-align: center;
            margin-top: 30px;
        }
    }
`;
