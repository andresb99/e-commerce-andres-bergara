import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [order, setOrder] = useState(null);

  const addItem = (currentItem) => {

    const index = isInCart(currentItem);

    if (index === -1) {

      setItems([...items, { currentItem }]);

    } else {

      let updateCard = [...items];

      const { amount, product } = updateCard[index].currentItem

      if ((amount + currentItem.amount) <= product.stock) {

        updateCard[index].currentItem.amount += currentItem.amount;

      } else {
        alert('Not enought stock')
      }

      setItems(updateCard);
    }
  };


  const clear = () => {
    setItems([])
  }

  const orderNumber = (id) => {
    setOrder(id);
  }

  const isInCart = (itemNuevo) => {

    const item = items.find(item => item.currentItem.product.id === itemNuevo.product.id);

    return items.indexOf(item);
  }

  const removeItem = (item) => {

    const index = isInCart(item)

    items.splice(index, 1)

    setItems([...items])
  }


  useEffect(() => {

    let totalCant = 0;
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
      let cant = items[i]?.currentItem.amount;
      let price = items[i]?.currentItem.amount * items[i]?.currentItem.product.price;

      totalPrice = totalPrice + price;
      totalCant = totalCant + cant;
    }

    setTotalQuantity(totalCant);
    setPrice(totalPrice);

  }, [items])


  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        clear,
        removeItem,
        totalQuantity,
        price,
        orderNumber,
        order
      }}
    >
      {children}
    </CartContext.Provider>
  );
};