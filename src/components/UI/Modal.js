import ReactDOM  from 'react-dom';
import Card from './Card';
import css from './Modal.module.css';

      
const Backdrop = (props) => { return <div className={css.backdrop}>{props.children}</div>};

const Modal = (props) => {
  return (
    <Card>
      <div className={css.modal}>
        {props.children}
      </div>
    </Card>
  );
}

const RegularModal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop/>, document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Modal/>, document.getElementById('overlay-root')
      )}
    </>
  );
}

export default Modal;