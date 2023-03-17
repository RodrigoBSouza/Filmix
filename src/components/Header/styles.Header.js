import styled from "styled-components";

export const HeaderBar = styled.header`
    display: flex;
    justify-content: space-around;    
    align-items: center;
    width: 100%;
    height: 70px;
    padding: 20px;
    background-color: #000;
    color: #E4E4E4;

    h1 {
        color: #E4E4E4;
    }

    h1:hover {
        opacity: .9;
    }

    ul {
        display: flex;
        gap: 40px;
        list-style: none;
    }

    li {
        font-size: 19px;
        color: #E4E4E4;
    }

    li:hover {
        cursor: pointer;
        opacity: .8;
    }

    @media screen and (max-width: 420px) {
        ul {
            gap: 20px;
        }
    }
`;