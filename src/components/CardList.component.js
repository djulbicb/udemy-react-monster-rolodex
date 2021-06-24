import React from 'react';
import Card from './Card.component';
import './cards.styles.css';
const CardList = (props) => {

    return (
        <>
            {
                props.children
            }
            <div className="card-list">
                
                {
                    props.monsters.map(monster => (
                        <Card key={monster.id}  monster={monster}></Card>
                    ))
                }
            </div>
        </>
    )
}

export default CardList;