import { connect } from 'react-redux';

import Plate from '../components/Plate';

const mapStateToProps = ({ plate }) => ({ 
  plate
});

// const mapDispatchToProps = dispatch => ({ });

export default connect(
  mapStateToProps,
  null
)(Plate);
