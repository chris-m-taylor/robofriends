import React from 'react';
import Card from './Card.js';


const CardList = ({robots}) => {

    // let robots = props.robots;
    const cardsArray = robots.map((user) => {
        return (
            <Card 
                key={user.id} 
                id={user.id} 
                name={user.name} 
                email={user.email}
            />
        )
    })

    return(
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;