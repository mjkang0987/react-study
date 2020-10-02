import React from 'react';
import {Route, Link} from 'react-router-dom';

const Rooms = ({match}) => {
  /*
   match 속성 = App.js 내에 Route 컴포넌트에 component 값
  */
  return(
    <div>
      <h2>여기는 방을 소개하는 페이지 입니다.</h2>
      <p>
        <Link
          to={`${match.url}/blueRoom`}>
          파란 방입니다.
        </Link>
      </p>
      <p>
        <Link
          to={`${match.url}/redRoom`}>
          빨간 방입니다.
        </Link>
      </p>
      <Route
        path={`${match.url}/:roomId`}
        component={Room}/>
      <Route
        exact
        path={match.url}
        render={
          () => <h3>방을 선택해 주세요</h3>
        } />
    </div>
  )
}

const Room = ({match}) => {
  return <h2>{`${match.params.roomId} 방을 선택하셨습니다.`}</h2>;
}


export default Rooms;