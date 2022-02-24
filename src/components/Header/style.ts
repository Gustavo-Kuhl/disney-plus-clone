import styled from "styled-components";

interface Props {
  blueHeader?: boolean;
  open?: boolean
}

export const HeaderContainer = styled.header<Props>`
  display: flex;
  padding: 1rem 2rem;
  align-items: center;
  height: 70px;
  transition: 0.2s ease-in-out;
  background: ${(props) =>
    props.blueHeader
      ? "#090b13"
      : "linear-gradient(to bottom, #000, transparent)"};
  z-index: 9999;
  position: sticky;
  width: 100%;
  top: 0;

  @media (max-width: 1150px) {
    background: #090b13;
  }
`;

export const Nav = styled.nav`
  padding: 0.2rem;
`;

export const List = styled.ul<Props>`
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 1100px) {
    flex-flow: column;
    background: #090b13;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:60%;
    font-size: 1.5rem;
    padding-top: 4rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: .3s;
  }
`;

export const ListItem = styled.li`
  display: flex;
  margin: 0 1rem;
  font-weight: 500;
  cursor: pointer;
  align-items: center;

  a {
    margin: 0.5rem;
    position: relative;

    &:before {
      content: "";
      background: #fff;
      transition: 0.3s;
      position: absolute;
      width: 0px;
      height: 2px;
      bottom: 0;
    }

    &:hover::before {
      width: 100%;
    }
  }

  @media (max-width: 1100px) {
    padding: .5rem;
  }
`;

export const Logo = styled.img`
  width: 70px;
`;

export const ProfileMenu = styled.div`
  width: 200px;
  position: absolute;
  transition: 0.4s;
  right: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  font-size: 1.2rem;
  top: 0;
  bottom: 0;
  color: #777;
  overflow: hidden;

  &:hover {
    border: 1px solid #555;
    background: #111;
    height: 160px;
    right: 0;
    top: 0;
  }
`;

export const Anchor = styled.a`
  text-align: center;
  width: 100%;
  margin-top: 1rem;
  color: #777;

  &:hover {
    color: #fff;
  }
`;
