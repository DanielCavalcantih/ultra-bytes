import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchComputers } from '../redux/actions';

function Login() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchComputers())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <input type="email" />
      <input type="password" />
    </div>
  )
}

export default Login;
