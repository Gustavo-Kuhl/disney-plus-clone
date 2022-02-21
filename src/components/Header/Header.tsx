import React from "react";
import {
  HeaderContainer,
  List,
  ListItem,
  ListContainer,
  Logo,
  ProfileMenu,
} from "./style";
import DisneyImg from "../../assets/disney-plus.svg";
import HomeImg from "../../assets/home.svg";
import SearchImg from "../../assets/search.svg"
import StarImg from '../../assets/star.svg'
import SeriesImg from "../../assets/series.svg"
import MoviesImg from "../../assets/film_reel.svg"
import WatchlistImg from "../../assets/plus.svg"
import { Link } from "react-router-dom";


interface Props {
  blueHeader: boolean
}

const Header: React.FC<Props> = ({blueHeader}) => {
  return (
    <HeaderContainer blueHeader={blueHeader}>
      <ListContainer>
        <List>
          <ListItem>
            <Logo src={DisneyImg} />
          </ListItem>
          <ListItem>
            <img src={HomeImg} alt="" />
            <Link to="/home">HOME</Link>
          </ListItem>
          <ListItem>
              <img src={SearchImg} alt="" />
            <Link to="/">SEARCH</Link>
          </ListItem>
          <ListItem>
            <img src={WatchlistImg} alt="" />
            <Link to="/">WATCHLIST</Link>
          </ListItem>
          <ListItem>
            <img width="18" src={StarImg} alt="" />
            <Link to="/">ORIGINALS</Link>
          </ListItem>
          <ListItem>
            <img src={MoviesImg} alt="" />
            <Link to="/movies">MOVIES</Link>
          </ListItem>
          <ListItem>
            <img width="18" src={SeriesImg} alt="" />
            <Link to="/series">SERIES</Link>
          </ListItem>
        </List>
      </ListContainer>
      <ProfileMenu />
    </HeaderContainer>
  );
};

export { Header };
