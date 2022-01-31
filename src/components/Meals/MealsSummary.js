import css from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={css.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite mex from our broad selection of available tacos and burritos
        and enjoy a delicious meal at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and with the
        best flavour.
      </p>
    </section>
  );
}

export default MealsSummary;