import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialItems } from '../redux/actions';
import CategoriesList from '../components/CategoriesList';
import CardItem from '../components/CardItem';
import '../styles/home.css';
import Header from "../components/Header";

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchInitialItems())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const listInitialItems = useSelector(state => state.reducer.initialItems);

  return (
    <>
      <Header />
      <div className="home">
        <CategoriesList />
        <div className="container-cards">
          {
            listInitialItems.map(item => <CardItem title={ item.title } image={ item.thumbnail } price={ item.price } />)
          }
        </div>
      </div>
    </>
  )
}

export default Home;
