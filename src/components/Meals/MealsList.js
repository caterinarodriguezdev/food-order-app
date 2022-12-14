import { useEffect, useState } from 'react';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

import css from './MealsList.module.css';
// import data from '../../data/dummy-data';


const MealsList = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const [httpError, setHttpError] = useState();
  // we use UseEffect in order to fetch all meals only the first time the component is rendered
  useEffect(() => {

    const fetchMeals = async () => {
      const response = await fetch("https://react-food-order-app-8708c-default-rtdb.europe-west1.firebasedatabase.app/meals.json");
      
      // errors check
      if (!response.ok) {
        throw new Error("Shit");
      }

      // convert Response object to javascript object
      const responseData = await response.json();
      
      const loadedMeals = [];
      // convert object to array
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].description
        })
      }
      setIsLoading(false);
      setMeals(loadedMeals);
    }
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error);
    });
  }, [])

  if (isLoading) {
    return (
      <section className={css.mealsLoading}>
      <h1>Loading...</h1>
    </section>)
  }

  if (httpError) {
    return (
      <section className={css.mealsError}>
        <p>Failed to fetch</p>
      </section>
    );
  }

  return (
    <section className={css.meals}>
      <Card>
        <ul>
          {meals.map(item => (
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