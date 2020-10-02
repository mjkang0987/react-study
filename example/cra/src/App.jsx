import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Rooms from './Rooms';

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{padding: 20, border: '5px solid gray'}}>
        <p>
          <Link to='/'>홈</Link>
        </p>
        <p>
          <Link to='/photo'>사진</Link>
        </p>
        <p>
          <Link to='/rooms'>방 소개</Link>
        </p>
        <Route
          exact
          path='/'
          component={Home} />
        <Route
          path='/photo'
          component={Photo} />
        <Route
          path='/rooms'
          component={Rooms} />
      </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return <h2>여기는 홈페이지 입니다. 원하는 페이지 버튼을 선택하세요.</h2>
}

const Photo = () => {
  return <h2>여기서 사진을 감상하세요.</h2>
}

export default App;
