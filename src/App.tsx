import fs from 'fs'; //builtin
import React, { useCallback, useContext, useEffect } from 'react'; // specific external
import dayjs from 'dayjs'; // other external
import isLeapYear from 'dayjs/plugin/isLeapYear';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { get } from 'fbgraph';
import { Request } from 'express';
import { UserContext } from './context/user-context';
import logo from './logo.svg';

const App: React.FC = () => {
  const a = get('');
  console.log(a);
  const rq: Partial<Request> = {
    user: {
      id: '1',
    },
  };
  const handleClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    console.log('handleClick', event.detail);
  }, []);

  const cb = useCallback(() => {}, []);

  useEffect(() => {
    cb();
  }, []);

  const user = useContext(UserContext);

  const Header = () => {
    return (
      <header>
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
          Learn React
        </a>
        <p>
          Welcome {user.username}, you are {user.role}
        </p>
      </header>
    );
  };

  return <Header />;
};

export default App;
