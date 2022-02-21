import React from "react";
import { StudioCard, StudiosListContainer } from "./style";

import disney from "../../../../assets/disney-logo.svg"
import pixar from "../../../../assets/pixar.svg"
import marvel from '../../../../assets/marvel.png'
import starWars from "../../../../assets/star-wars.svg"
import national from "../../../../assets/national.png"

export const StudiosList = () => {
    return (
        <StudiosListContainer>
            <StudioCard><img src={disney} alt="" /></StudioCard>
            <StudioCard><img src={pixar} alt="" /></StudioCard>
            <StudioCard><img style={{width: 200}} src={marvel} alt="" /></StudioCard>
            <StudioCard><img src={starWars} alt="" /></StudioCard>
            <StudioCard><img src={national} alt="" /></StudioCard>
        </StudiosListContainer>
    )
}