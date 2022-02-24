import React from "react";
import styled from "styled-components";

const StyledBurger = styled.div<{ open: boolean }>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 20px;
  left: 20px;

  cursor: pointer;
  display: none;
  z-index: 20;

  @media (max-width: 1100px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#ccc" : "#888")};
    border-radius: 0.5rem;
    transform-origin: 1px;
    transition: all 0.2s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

interface Props {
  open: boolean;
  setOpen: Function;
}

export const BurgerMenu: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
};
