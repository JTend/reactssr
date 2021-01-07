import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, resetUser } from '../redux/session';

const Session = () => {
  const User = useSelector( state => state.reduceUser.User );
  const dispatch = useDispatch();
  
  const VISITOR = 0, ERROR = 1, LOGGED = 2;
  const userName = useRef(''), userPwd = useRef('');
  const [status, setStatus] = useState(User === 'visitor' ? VISITOR : LOGGED);

  const handleLogIn = () => {
    if(userName.current.value.length > 1 && userName.current.value === userPwd.current.value) {
      dispatch(updateUser(userName.current.value));
      setStatus(LOGGED);
    }
    else setStatus(ERROR);
  }

  const handleLogOut = () => {
    dispatch(resetUser());
    setStatus(VISITOR);
  }

  return (
    <aside>
      {
        status < LOGGED
        ? <form>
          <label htmlFor="username" >User:</label>
          <input type="text" name="username" placeholder="User name" ref={userName}/><br/>
          <label htmlFor="password" >Key:</label>
          <input type="password" name="username" placeholder="Input password" ref={userPwd}/>
          <button onClick={ () => handleLogIn() }>Log In</button>
          </form>
        : <button onClick={ () => handleLogOut() }>Log Out</button>
      }
      {
        status === ERROR
        ? <p>Invalid info</p>
        : <p>Login info</p>
      }
    </aside>
  )
}

export default Session;