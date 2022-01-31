import MealItem from './MealItem';
import Card from '../UI/Card';

import css from './MealsList.module.css';
import data from '../../data/dummy-data';


const MealsList = () => {
  return (
    <section className={css.meals}>
      <Card>
        <ul>
          {data.map(item => (
            <MealItem
              id={item.id}
              key={item.id}
              name={item.name}
              price={item.price}
              description={item.description}            
              />
            )
          )}     
        </ul>
      </Card>
    </section>
  );
}

export default MealsList;