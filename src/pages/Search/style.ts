import styled from "styled-components";

export const SearchContainer = styled.main`
  min-height: 70vh;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 3rem;
  padding: 1.5rem 1.5rem 1.5rem 5rem;
  background: rgb(75, 78, 90);
  outline: unset;
  border: none;
  color: rgb(249, 249, 249);
  position: sticky;
  top: 65px;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1.2rem;
  }
`;

export const SearchListContainer = styled.section`
  padding: 2rem 1rem;
  margin-top: 2rem;
`;

export const SearchList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const ResultItem = styled.li`
  transition: 0.3s;
  
  img {
    margin: 1rem 0.2rem;
    border-radius: 0.5rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 10px 15px -5px #000;
    display: block;
    width: 320px;
    height: 200px;
    object-fit: cover;

    @media (max-width: 1150px) {
      width: 110px;
      height: 150px;
    }

    &:hover {
      border: 2px solid #fff;
    }
  }

  &:hover {
    transform: scale(105%);
  }
`;
