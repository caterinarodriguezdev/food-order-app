import css from './Modal.module.css';

const Modal = (props) => {
  return (
    <>
      <div className={css.backdrop}></div>
      <div className={css.modal}>
        {props.children}
      </div>
    </>
  );
}

export default Modal;