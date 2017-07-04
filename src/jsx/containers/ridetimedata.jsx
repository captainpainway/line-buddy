import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { RideTimes } from '../ridetimes.jsx';

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const RideTimeData = connect(
    mapStateToProps
)(RideTimes)

export default RideTimeData