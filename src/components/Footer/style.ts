import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #090b13;
    padding: 1rem;
    font-size: .8rem;
`

export const Logo = styled.img`
    width: 80px;
`

export const TextLine = styled.div`
    display: block;
    margin: .5rem;

    span {
        margin: 1rem
    }
`
export const TextBox = styled.div`
    width: 500px;
    margin: 1rem;
    text-align: center;
`