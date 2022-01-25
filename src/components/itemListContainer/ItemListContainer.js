import React from 'react';

//import styles
import './itemListContainer.css';

const ItemListContainer = (props) => {
  return <>
            <h1>{props.greetings.greeting}<span>{props.greetings.name}</span></h1>
         </>;
};

export default ItemListContainer;
