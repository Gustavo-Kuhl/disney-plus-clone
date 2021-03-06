import styled from "styled-components";

export const WatchlistContainer = styled.main`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    min-width: 80px;
    width: 8%;
    border: 1px solid #aaa;
    border-radius: 50%;
    padding: 1rem;
    margin: 1rem;
  }

  p {
    padding: 1rem;
  }
`