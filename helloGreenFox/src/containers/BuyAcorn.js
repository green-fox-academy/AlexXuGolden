import { connect } from 'react-redux';
import { addTodo } from '../action/actions';
import Button from '../Button';


const mapStateToProps = function (state) {
  return {
    count: state.count,
    name: 'Buy one',
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    func: () => dispatch(addTodo(1)),
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;
