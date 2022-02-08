import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartContextProvider from './store/cart-context';
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
    <CartContextProvider.Provider value={{
      totalAmount: 5,
      addedItems: [],
      addItem: () => {},
      removeItem: () => {}
    }}>
      {modalIsOpen && <Cart modalIsOpen={modalIsOpen} onCloseModal={hideModal} onOpenModal={showModal}/>}
      <Header onOpenModal={showModal}/>
      <main>
        <Meals/>
      </main>
    </CartContextProvider.Provider>
  )}

export default App;
