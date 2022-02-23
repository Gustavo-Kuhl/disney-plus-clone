import styled from "styled-components";

export const MoviesContainer = styled.main`
  padding: 2rem 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    padding: 0 3.5rem;
  }
`;

export const Select = styled.select`
  padding: 0.4rem;
  border-radius: 2rem;
  display: block;
  background: rgba(182, 182, 182, 0.2);
  border: unset;
  color: #fff;
  font-size: 1.1rem;
`;

export const Option = styled.option`
  background: #111;
`;

export const MoviesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  object-fit: cover;
  margin: .5rem;
  border-radius: .5rem;
  display: block;
  width: 320px;
  height: 200px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid #aaa;
  }
`