import styled from 'styled-components'

export const LoginContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #1a1d29;

    img {
        width: 300px;
    }
`

export const Button = styled.button`
    padding: 1rem;
    border-radius: .5rem;
    border: unset;
    background: #399eff;
    color: #fff;
    font-size: 1.4rem;
    cursor: pointer;
`