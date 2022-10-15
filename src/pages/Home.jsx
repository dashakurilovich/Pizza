import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from "../components";
import { setCategory, setSortBy } from '../redux/actions/filter';
import { fetchPizzas } from '../redux/actions/pizzas';
import PizzaLoadingBlock from '../components/PizzaBlock/PizzaBlockSkeleton';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' }
]

function Home() {

  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoading = useSelector(({ pizzas }) => pizzas.isLoading);
  const { category, sortBy } = useSelector(({ filter }) => filter)

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy])


  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [dispatch])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [dispatch])

  const handleAddPizzaToCart = obj => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj
    })
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onCLickCategory={onSelectCategory}
          items={categoryNames} />
        <SortPopup
          activeSortType={sortBy.type}
          onClickSortType={onSelectSortType}
          items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading
            ? items.map((obj) => (<PizzaBlock
              onClickAddPizza={handleAddPizzaToCart}
              key={obj.id}
              addedCount={cartItems[obj.id] && cartItems[obj.id].length}
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