import styled from "styled-components";

export const MainContainer = styled.main`

`

export const Loading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: #090b13;
  display: fixed;
  justify-content: center;
  align-items: center;

  &::before {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 3px solid;
    border-color: #399fee #399fee transparent;
    animation: rotateIcon .8s infinite;
  }

  @keyframes rotateIcon {
      0% {transform: rotate(0)}
      100%{transform: rotate(360deg)}
  }
`;
