import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUserInfo } from '../redux/actions';

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ email: '' });
  const storageUser = JSON.parse(localStorage.getItem('userInfo'));

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addUserInfo(userInfo));
    if (!storageUser) localStorage.setItem('userInfo', JSON.stringify(userInfo));
    navigate('/home');
  }

  return (
    <div>
      <input placeholder="Digite seu email" onChange={ ({ target }) => setUserInfo({ email: target.value }) } type="email" required />
      <input placeholder="Digite sua senha" type="password" required />
      <button disabled={ !validateEmail(userInfo.email) } type="submit" onClick={ handleClick }>Login</button>
    </div>
  )
}

export default Login;
