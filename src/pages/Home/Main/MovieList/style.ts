import styled from "styled-components";

export const MovieListContainer = styled.div`
  padding: 0 2rem;
  position: relative;

  h2 {
    margin: 3rem 0 0 2rem;
  }
`;

interface INavigateButtonProps {
  left?: boolean;
  right?: boolean;
}

export const NavigateButton = styled.div<INavigateButtonProps>`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  user-select: none;
  width: 70px;
  font-size: 3rem;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 99;
  /* top: 14%; */
  left: ${(props) => (props.left ? 0 : null)};
  right: ${(props) => (props.right ? 0 : null)};
  cursor: pointer;
  transition: 0.4s;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
`;

export const ListArea = styled.div`
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  transition: 0.5s;
  overflow-x: hidden;
  padding: 1rem;
`;

export const ListItem = styled.li`
  display: flex;
  transition: 0.3s;
  padding: 0 1rem;

  img {
    border-radius: 1rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 10px 15px -5px #000;
    min-width: 20%;

    &:hover {
      border: 2px solid #fff;
    }
  }

  &:hover {
    transform: scale(105%);
  }
`;
