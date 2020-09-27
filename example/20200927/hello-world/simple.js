const LikeButton = () => {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  return React.createElement(
    'button',
    {
      onClick: () => setLiked(!liked)
    },
    text
  );
}

const ROOT = 'root';
const domContainer = document.getElementById(ROOT);
ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement(LikeButton),
    React.createElement(LikeButton),
    React.createElement(LikeButton)
  ),
  domContainer
);