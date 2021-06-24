import React from 'react';

const Card = (props) => {
    const monster = props.monster;

    return (
        <div className="card">
            <img src={`https://robohash.org/>${monster.id}?set=set2`}></img>
            <h2>{monster.id} {monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    )
}

export default Card;

