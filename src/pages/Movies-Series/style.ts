import styled from "styled-components";

export const MoviesContainer = styled.main`
  padding: 2rem 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
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

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.img`
  margin: 1rem 0.2rem;
  border-radius: 0.5rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 10px 15px -5px #000;
  display: block;
  transition: .3s;
  width: 320px;
  height: 200px;
  object-fit: cover;

  @media (max-width: 1150px) {
    width: 110px;
    height: 150px;
  }

  &:hover {
    border: 2px solid #fff;
    transform: scale(105%);
  }
`;
