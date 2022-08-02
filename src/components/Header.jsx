import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchedItems } from "../redux/actions";

function Header() {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ target }) => setInputValue(target.value);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(fetchSearchedItems(inputValue));
    setInputValue('');
  }

  return (
    <header>
      <h1>SkyShop</h1>
      <form>
        <input value={ inputValue } onChange={ handleChange } type="text" placeholder="Pesquise aqui" />
        <button onClick={ handleClick } type="submit"><img width="30" src="https://i.pinimg.com/originals/89/fb/fb/89fbfbe1b4c301b7be5565c6f98e0495.png" alt="" /></button>
      </form>
    </header>
  )
}

export default Header;