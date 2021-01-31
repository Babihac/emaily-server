import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectUser} from '../../redux/auth/auth.selector'
import {createStructuredSelector} from 'reselect';
import {Link} from 'react-router-dom';
import Payments from '../payments/payments.component';

class Header extends Component {

    renderContent() {
        const {currentUser} = this.props;
        switch(currentUser) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>
            default:
                return (
                    <React.Fragment>
                        <li> <Payments/> </li>
                        <li style={{margin: '0 10px'}}>Credits: {currentUser.credits}</li>
                        <li><a href="/api/logout">Logout</a></li>
                    </React.Fragment>
                )
        }
    }
    render() {
        const {currentUser} = this.props;
        return (
            
            <nav className>
                <div className="nav-wrapper">
                    <Link to={this.props.auth? '/surveys' : '/'} className='left brand-logo'>Emaily </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectUser
}) 

export default connect(mapStateToProps)(Header);