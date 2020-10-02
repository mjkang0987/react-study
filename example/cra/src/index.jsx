import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [pageName, setPageName] = useState('');
  useEffect(() => {
    window.onpopstate = event => {
      setPageName(event.state);
    }
  }, []);
  const handler = event => {
    const target = event.target;
    const pageData = target.dataset.page;
      window.history.pushState(
        `${pageData}`,
        '',
        `/${pageData}`
      )
    setPageName(pageData);
  }
  return (
    <div>
      <button
        onClick={handler}
        data-page="page1">
        page1
      </button>
      <button
        onClick={handler}
        data-page="page2">
        page2
      </button>
      {!pageName && <Home />}
      {pageName === 'page1' && <Page1 />}
      {pageName === 'page2' && <Page2 />}
    </div>
  )
}

const Home = () => {
  return <h2>여기는 홈페이지 입니다. 원하는 페이지 버튼을 선택하세요.</h2>
}

const Page1 = () => {
  return <h2>여기는 Page1 입니다.</h2>
}

const Page2 = () => {
  return <h2>여기는 Page2 입니다.</h2>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);