import Navigator from './navigator';
import Session from './session';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Container = props => {
  const Lighted = useSelector( state => state.reduceLight.Lighted )

  useEffect( () => {
    document.body.className = Lighted ? 'light' : 'dark';
  }, [Lighted]);
  
  return (
    <>
      <Navigator/>
      <Session/>
      <section>
        {props.children}
      </section>
    </>
  )
}

export default Container;