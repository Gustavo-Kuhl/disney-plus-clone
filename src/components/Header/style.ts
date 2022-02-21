import styled from "styled-components";

interface Props {
  blueHeader: boolean
}

export const HeaderContainer = styled.header<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 2rem;
  position: sticky;
  transition: .5s;
  background: ${props => props.blueHeader ? "#090b13" : "linear-gradient(to bottom, #000, transparent)"};
  z-index: 999;
  top: 0;
`;

export const ListContainer = styled.nav`
    padding: .2rem;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListItem = styled.li`
  display: flex;
  margin: 0 1rem;
  font-weight: 500;
  cursor: pointer;
  align-items: center;

  a {
      margin: .5rem;
      position: relative;
      
      &:before {
        content: "";
        background: #fff;
        transition: .3s;
        position: absolute;
        width: 0px;
        height: 2px;
        bottom: 0;
      }

      &:hover::before {
        width: 100%;
      }
  }

  @media(max-width: 1100px) {
    &:nth-child(n+2) {display: none}
    
  }
`;

export const Logo = styled.img`
  width: 70px;
`;

export const ProfileMenu = styled.div`
  width: 200px;
  /* height: 100%; */
  padding: 1.8rem;
  position: absolute;
  transition: .4s;
  right: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  font-size: 1.2rem;
  top: 0;
  color: #777;
  overflow: hidden;

  &:hover {
    border: 1px solid #555;
    background: #111;
    height: 180px;
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
`
