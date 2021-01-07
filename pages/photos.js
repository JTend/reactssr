import { useSelector } from 'react-redux';
import { selectUser } from '../redux/session';
import Container from '../components/container';
import Head from 'next/head';

const Photos = () => {
  const User = useSelector(state => selectUser(state));
  return (
    <Container>
      <Head>
        <title>Next &amp; Redux | Photos</title>
      </Head>
      <h1>Photos!</h1>
      <h2>{User}</h2>
    </Container>
  )
}

export default Photos;