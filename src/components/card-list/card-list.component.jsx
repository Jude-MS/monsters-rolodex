import React from 'react';
import { Card } from '../Card/card.component'
import './card-list.styles.css';


export const CardList = (props) => {
    return <div className="card-list">
            {
                props.monsters.map(monster => (
                    <Card monster={monster} />
                ))
            }
          </div>;
}