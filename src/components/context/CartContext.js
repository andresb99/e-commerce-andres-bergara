import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (currentItem) => {

    const index = isInCart(currentItem);

    if (index === -1){

      setItems([...items, {currentItem}]);

    }else{

      let updateCard = [...items];

      const {amount, product} = updateCard[index].currentItem

      if((amount + currentItem.amount) <= product.stock){

        updateCard[index].currentItem.amount += currentItem.amount;

      }else{ 
        alert('not enough stock')
      }

      setItems(updateCard);
    }
  };

  const clear = () => {
    setItems([])
  }

  const isInCart = (itemNuevo) => {

    const item = items.find( item => item.currentItem.product.id === itemNuevo.product.id);

    return items.indexOf(item);
  }

  const removeItem = (item) => {

    const index = isInCart(item)

    items.splice(index,1)

    setItems([...items])
  }

  return (
    <CartContext.Provider
    value={{ 
      items,
      addItem,
      clear,
      removeItem,
    }}
    >
      {children}
    </CartContext.Provider>
  );
};