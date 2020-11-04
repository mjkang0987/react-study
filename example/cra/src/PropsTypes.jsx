import PropTypes from 'prop-types';
User.propTypes = {
  male: PropTypes.bool.isRequired,
  age: function(props, propName, componentName) {
    const value = props[propName];
    if (value < 10 || value > 20) {
      return new Error (
        `invalid prop ${propName} supplied to ${componentName}.
        It must be 10 <= value <= 20`
      )
    }
  },
  type: PropTypes.oneOf(['gold', 'silver', 'bronze']),
  onChangeName: PropTypes.func,
  onChangeTitle: PropTypes.func.isRequired,
};
export default function User({type, age, male, onChangeName, onChangeTitle}) {
  const onClick = () => {
    const msg = `type: ${type}, age: ${age ? age : '알 수 없음'}`
    console.log(msg, {color: type === 'gold' ? 'red' : 'black'});
  }

  const onClick2 = (name, title) => {
    if (onChangeName) {
      onChangeName(name);
    }
    onChangeTitle(title);
    male ? goMalePage() : goFemalePage();
  }
  return null;
};

const goMalePage = () => {};
const goFemalePage = () => {};

