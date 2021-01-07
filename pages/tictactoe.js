import { useSelector } from 'react-redux';
import Container from '../components/container';
import Head from 'next/head';
import Square from '../components/tictactoe/square';
import History from '../components/tictactoe/history.js';
import winner from '../components/tictactoe/winner';

const Tictactoe = () => {
  const board = useSelector( state => state.reduceTTT.Board );
  const xPlays = useSelector( state => state.reduceTTT.xPlays );

  return (
    <Container>
      <Head>
        <title>Next &amp; Redux | TicTacToe</title>
      </Head>
      <section>
        {
          winner(board)
          ? <h1>{winner(board)} is the winner!</h1>
          : <h1>{xPlays ? 'Turn for X' : 'Turn for O'}</h1>
        }
        <div className="board">
          {board.map( (element, index) => <Square id={index} key={index}>{element}</Square> )}
        </div>
      </section>
      <History/>
    </Container>
  )
}

export default Tictactoe;