import React, { useEffect, useState } from "react";
import { CarouselContainer, CarouselListArea, List, ListItem } from "./style";

import disney from "../../../../assets/disney-logo.svg"

const Carousel = () => {

    const [move, setMove] = useState<number>(0)
    const items = [1, 2, 3, 4, 5]
    
    let index = 0
    
    function moveCarousel() {
        index++
        
        if (index > items.length - 1) {
            index = 0
        }
        
    }

    setInterval(moveCarousel, 2000)
 
    return (
        <CarouselContainer>
            <CarouselListArea>
                <List style={{marginLeft: -1000}}>
                    {items.map((item) => {
                        return (
                            <ListItem>
                                <img src={disney} alt="" />
                                {item}
                            </ListItem>
                        )
                    })}
                </List>
            </CarouselListArea>
        </CarouselContainer>
    )
}

export { Carousel }