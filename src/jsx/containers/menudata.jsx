import { PropTypes } from 'react';
import { connect } from 'react-redux';
import Menu from '../menu.jsx';

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const MenuData = connect(
    mapStateToProps
)(Menu)

export default MenuData