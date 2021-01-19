import React from 'react';
import './collection-item.styles.scss'


const CollectionItem = ({id, price, name, imageUrl}) => (
    <div className="collection-item">
        <div 
            className="image"
            style={{backgroundImage: `url(${imageUrl})`}}
        />
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        
    </div>
)

export default CollectionItem;