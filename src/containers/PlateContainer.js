import { connect } from 'react-redux';
import Plate from '../components/Plate';

//todo: define mapStateToProps
const mapStateToProps = ({plate}) => ({
  plate 
})

export default connect(
  mapStateToProps,
  null
)(Plate);
