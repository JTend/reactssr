import { useDispatch, useSelector } from 'react-redux';
import { playSquare } from '../../redux/tictactoe';
import winner from './winner';

const Square = ({id, children}) => {
  const board = useSelector( state => state.reduceTTT.Board );
  const dispatch = useDispatch();

  const handleClick = () => {
    if(!children && ! winner(board)) dispatch(playSquare(+id));
  }

  return (
    <button className="square" onClick={ () => handleClick() }>
      {children}
    </button>
  )
}
export default Square
