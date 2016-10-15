import { connect } from 'react-redux';
import Menu from '../components/Menu';
import {addItemToPlate} from '../action-creators/plate.js'

//todo: define mapStateToProps
//NOTE gives this container access to the state (makes this.props.menu a thing)
//NOTE {menu} extracts state.menu
//QUESTION how to do this???
const mapStateToProps = ({menu}) => ({
    menu
})

//NOTE takes dispatch, returns object
//NOTE dispatch takes an action createor (or a plain ol' action)
//QUESTION addItemToPlate vs ADD_TO_PLATE vs addToPlate ???
const mapDispatchToProps = (dispatch) => ({
  addToPlate: function(item) {
    dispatch(addItemToPlate(item));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
