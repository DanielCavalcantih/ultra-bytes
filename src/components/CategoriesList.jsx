import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/actions";

function CategoriesList() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const listCategories = useSelector(state => state.reducer.categories);

  return (
    <div className="container-categories">
      <ul className="categories-list">
        {
          listCategories.map(category => <li key={ category.id }>{ category.name }</li>)
        }
      </ul>
    </div>
  )
}

export default CategoriesList;