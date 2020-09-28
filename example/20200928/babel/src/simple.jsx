const LikeButton = () => {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  return <button onClick={() => setLiked(!liked)}>{text}</button>;
}

const Container = () => {
  const [count, setCount] = React.useState(0);
  return <div>
    <LikeButton/>
    <div style={{marginTop: 20}}>
      <span>
        전체 카운트
      </span>
      <span style={{marginRight: 10}}>{count}</span>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  </div>
}
const ROOT = 'root';
const domContainer = document.getElementById(ROOT);
ReactDOM.render(React.createElement(Container), domContainer);