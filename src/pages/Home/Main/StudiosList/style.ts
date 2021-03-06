import styled from "styled-components";

export const StudiosListContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const StudioCard = styled.div`
    width: 17.5%;
    height: 180px;
    border-radius: .5rem;
    margin: 1rem;
    box-shadow: 0 15px 10px -7px #000;
    min-width: 250px;
    transition: .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50));
    border: 3px solid rgb(58, 60, 74);

    &:hover {
        transform: scale(105%);
    }

    img {
        min-width: 200px;
    }

    @media (max-width: 570px) {
        width: 100%;
    }
`