import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };

  const hideModal = () => {
    setModalIsOpen(false);
  }

  return (
    <CartProvider value={{
      totalAmount: 0,
      items: [],
      addItem: () => {},
      removeItem: () => {}
    }}>
      {modalIsOpen && <Cart onOpenModal={modalIsOpen} onCloseModal={hideModal}/>}
      <Header onOpenModal={showModal}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  )}

export default App;
