import styled from "styled-components";

export const SearchContainer = styled.main`
  min-height: calc(100vh - 250px);
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
  top: 75px;
  z-index: 1;
`;

export const SearchListContainer = styled.section`
  padding: 2rem 1rem;

  h4 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-left: 2rem;
  }
`;

export const SearchList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ResultItem = styled.li`
  display: flex;
  transition: 0.3s;
  padding: 1rem;

  img {
    border-radius: 1rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 10px 15px -5px #000;
    display: block;
    object-fit: cover;
    width: 330px;
    height: 200px;

    &:hover {
      border: 2px solid #fff;
    }
  }

  &:hover {
    transform: scale(105%);
  }
`;
