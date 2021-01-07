import { useSelector, useDispatch } from 'react-redux';
import { toogleLight } from '../redux/light';
import RouterLink from './link';

const Navigator = () => {
  const User = useSelector( state => state.reduceUser.User );
  const Lighted = useSelector( state => state.reduceLight.Lighted );
  const dispatch = useDispatch();

  return (
    <header>
      <nav>
        <RouterLink href="/">Home</RouterLink>
        <RouterLink href="/photos">Photos</RouterLink>
        <RouterLink href="/tictactoe">Tic-tac-toe</RouterLink>
      </nav>
      <section>
        <span>({User})</span>
        <button onClick={() => dispatch(toogleLight()) }>{(Lighted ? 'Dark' : 'Light') + ' theme'}</button>
      </section>
    </header>
  )
}

export default Navigator;