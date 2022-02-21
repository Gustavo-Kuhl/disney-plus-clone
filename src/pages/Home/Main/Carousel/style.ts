import styled from "styled-components";

export const CarouselContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselListArea = styled.div`
  width: 100%;
`;

export const List = styled.ol`
  overflow-x: hidden;
  width: 100%;
  display: flex;
  transition: 0.5s;
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

  &:nth-child(5) {
      margin: 0;
  }

`;
