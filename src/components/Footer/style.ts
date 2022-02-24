import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #090b13;
    padding: 1rem;
    font-size: .8rem;
    width: 100%;
`

export const Logo = styled.img`
    width: 80px;
`

export const TextLine = styled.div`
    display: block;
    margin: .5rem;
    text-align: center;

    span {
        margin: 1rem
    }
`
export const TextBox = styled.div`
    width: 400px;
    margin: 1rem;
    text-align: center;

    @media (max-width: 450px) {
        width: 280px;
    }
`