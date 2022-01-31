import css from './Input.module.css';

const Input = (props) => {
  return (
    <div className={css.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type={props.type}/>
    </div>
  );
}

export default Input;