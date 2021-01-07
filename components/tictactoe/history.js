import { useSelector ,useDispatch } from 'react-redux';
import { rollBack } from '../../redux/tictactoe';

const History = () => {
  const history = useSelector( state => state.reduceTTT.History );
  const dispatch = useDispatch();
  
  return (
    <aside>
      <h1>Game history:</h1>
      {
        history.length 
        ? (<ol>
          {
            history.map((elem, index) => {
              return <li key={index}>
                <button onClick={() => dispatch(rollBack(index)) }>Del</button>
                {elem.xPlays ? 'X played' : 'O played'}
              </li>
            })
          }
        </ol>)
        : <h4>Empty</h4>
      }
    </aside>
  )
}

export default History;