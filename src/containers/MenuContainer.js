import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { addItemToPlate } from '../action-creators/plate';

const mapStateToProps = ({menu}) => ({
  menu
});

const mapDispatchToProps = dispatch => ({ 
  addToPlate: function (item) {
    dispatch(addItemToPlate(item))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
