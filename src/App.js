import { useContext, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartContext from './store/cart-context';
import Cart from './components/Cart/Cart';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };

  const hideModal = () => {
    setModalIsOpen(false);
  }

  const cartCtx = useContext(CartContext);
  return (
    // <CartContext.Provider value={{
    //   addedMeals: [],
    //   modalIsOpen: false,
    //   toggleModal: () => {}
    // }}> 
    <>
      {modalIsOpen && <Cart modalIsOpen={modalIsOpen} onCloseModal={hideModal} onOpenModal={showModal}/>}
      <Header onOpenModal={showModal}/>
      <main>
        <Meals/>
      </main>
    </>
    // </CartContext.Provider>
  )}

export default App;
