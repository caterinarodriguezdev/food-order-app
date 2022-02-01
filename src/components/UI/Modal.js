import ReactDOM  from 'react-dom';
import Card from './Card';
import css from './Modal.module.css';

      
const Backdrop = (props) => { 
  return <div onClick={props.onCloseModal} className={css.backdrop}/>
};

const ModalOverlay = (props) => {
  return (
    <Card>
      <div className={css.modal}>
        <div className={css.content}>
          {props.children}
        </div>
      </div>
    </Card>
  );
}

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal}/>, document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlay-root')
      )}
    </>
  );
}

export default Modal;