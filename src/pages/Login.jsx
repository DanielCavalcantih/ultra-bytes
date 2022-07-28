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
    
  )
}

export default Login;
