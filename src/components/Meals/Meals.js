

const Meals = (props) => {
  return (
    <>
      <ul>
        {props.list.map(item => 
          (
            <MealItem
              name={item.name}
              price={item.price}            
              />
          )
        )}
      </ul>
    </>
  );
}

export default Meals;