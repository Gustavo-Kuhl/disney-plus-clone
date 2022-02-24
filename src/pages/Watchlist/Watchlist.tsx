import React from "react";
import { WatchlistContainer } from "./style";
import plus from "../../assets/plus.svg"

export const Watchlist: React.FC = () => {
  return (
    <WatchlistContainer>
      <img src={plus} alt="" />
      <h3>Your watchlist is empty</h3>
      <p>Content you add to your watchlist will appear here</p>
    </WatchlistContainer>
  );
};
