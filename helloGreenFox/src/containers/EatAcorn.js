import { connect } from 'react-redux';
import { eatTodo } from '../action/actions';
import Button from '../Button';

const mapStateToProps = function (state) {
  return {
    count: state.count,
    name: 'Eat one',
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    func: () => dispatch(eatTodo(1)),
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;
