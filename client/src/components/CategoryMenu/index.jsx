import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };
  // items-center
return (
  <div className='flex mx-24 my-6 justify-start'>
    <h2 className='flex text-2xl font-mono font-semibold'>Shop by Category:</h2>
    <div className="flex flex-wrap content-center">
      {categories.map((item) => (
        <button
          className='px-4 font-mono mx-2 bg-[--Orange] text-white rounded-md hover:bg-[--Navy] hover:font-semibold'
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
    <button
      className=' font-mono font-semibold px-4 m-2 bg-[--Orange] text-white rounded-md hover:bg-[--Navy]'
      onClick={() => { handleClick('') }}
    >
      All
    </button>
  </div>
);

  
}

export default CategoryMenu;
