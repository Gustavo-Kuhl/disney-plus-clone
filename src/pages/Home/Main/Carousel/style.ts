import styled from "styled-components";

export const CarouselContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
`

export const CarouselListArea = styled.div`
  width: 500%;
`;

export const List = styled.ol`
  overflow-x: hidden;
  width: 100%;
  display: flex;
  transition: 0.5s;
  animation: 4s slider infinite;
`;

export const ListItem = styled.li`
  box-shadow: 0 0px 5px #000;
  display: flex;
  margin-right: 1rem;
  border-radius: 0.5rem;
  justify-content: center;
  width: 100%;
  flex: none;
  height: 500px;
  padding: .5rem;
  
  img {
    
    box-shadow: 0 0 5px #000;
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