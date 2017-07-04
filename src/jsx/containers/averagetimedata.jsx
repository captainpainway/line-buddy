import { PropTypes } from 'react';
import { connect } from 'react-redux';
import { AverageTime } from '../averagetimes.jsx';

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const AverageTimeData = connect(
    mapStateToProps
)(AverageTime)

export default AverageTimeData