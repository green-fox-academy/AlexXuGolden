import { connect } from 'react-redux';
import Display from '../Display';

const mapStateToProps = function (count) {
  return { count };
};

// const mapDispatchToProps = function (dispatch) {
//   return {
//     onClick: () => {
//       dispatch(eatTodo());
//     },
//   };
// };

const DisplayRadux = connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Display);

export default DisplayRadux;
