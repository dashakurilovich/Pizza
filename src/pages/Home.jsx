import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from "../components";
import { setCategory } from '../redux/actions/filter';
import { fetchPizzas } from '../redux/actions/pizzas';
import PizzaLoadingBlock from '../components/PizzaBlock/PizzaBlockSkeleton';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' }
]

function Home() {

  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoading = useSelector(({ pizzas }) => pizzas.isLoading);
  const { category, sortBy } = useSelector(({ filter }) => filter)

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [category])


  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])
  
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onCLickItem={onSelectCategory}
          items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading
            ? items.map((obj) => (<PizzaBlock
              key={obj.id}
              isLoading={false}
              {...obj} />))
            : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)
        }
      </div>
    </div>
  );
}



export default Home;