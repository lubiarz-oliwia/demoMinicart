import React, { useState } from 'react';
import './App.css';
import CartFooter from './components/CartFooter';
import CartHeader from './components/CartHeader';
import ItemDetails from './components/ItemDetails';
import ItemQuantity from './components/ItemQuantity';
import productList from './productList';

function App() {
  const [items, setItems] = useState([...productList.items]);
  const productsSum = items.reduce((a, b) => a + b.qty * b.price.current_price, 0);
  const totalSum = productsSum + productList.shipping;

  const removeProduct = (product) => {
    setItems([...items.filter((item) => item.id !== product.id)]);
  }

  const decreaseQuantity = (product) => {
    const exist = items.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      items.map((item) =>
        item.id === product.id ? { ...exist, qty: 1 } : item
      )
    } else {
      setItems(
        items.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  }

  const increaseQuantity = (product) => {
    const exist = items.find((item) => item.id === product.id);
    if (exist.qty === 10) {
      items.map((item) =>
        item.id === product.id ? { ...exist, qty: 10 } : item
      )
    }
    else setItems(
      items.map((item) =>
        item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
      )
    );
  }

  return (
    <div className='container'>
      <div className='basket_container'>
        <CartHeader
          amount_of_items={items.length}
        />
        {items.map((item) => {
          return (
            <div className='item_container'>
              <ItemDetails
                key={item.id}
                image={item.image}
                product_name={item.product_name}
                product_options={item.product_options}
                removeProduct={() => removeProduct(item)}
              />
              <ItemQuantity
                key={item}
                quantity={item.qty}
                old_price={item.price.old_price}
                current_price={item.price.current_price}
                currency={productList.currency}
                decrease_quantity={() => decreaseQuantity(item)}
                increase_quantity={() => increaseQuantity(item)}
              />
            </div>
          )
        })}
        <CartFooter
          shipping_price={productList.shipping}
          currency={productList.currency}
          total_sum={totalSum}
        />
      </div>
    </div>
  );
}

export default App;


