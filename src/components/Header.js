import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.header}>
      <h1>TacoCampana</h1>
      <Navigation/>
      <div className={css.mainImage}>
        <img src="" alt=""/>
      </div>
    </div>
  );
}

export default Header;