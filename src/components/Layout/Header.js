import css from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <h1>TacoCampana</h1>
        <HeaderCartButton/>
      </header>
      <div className={css['main-image']}>
        <img src={mealsImg} alt="Different meals on a table"/>
      </div>
    </>
  );
}

export default Header;