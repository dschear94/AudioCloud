import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Modal from '../components/modal/modal';
import { openModal, closeModal } from '../actions/modal_actions';
// import {openModal} from '../actions/modal_actions'

// const Auth = ({ component: Component, path, loggedIn, exact }) => (
//     <Route path={path} exact={exact} render={(props) => (
//         !loggedIn ? (
//             <Component {...props} />
//         ) : (
//                 <Redirect to="/" />
//             )
//     )} />
// );

const Protected = (props) => {
    let { component: Component, path, loggedIn, exact } = props;
    return (
        <Route path={path} exact={exact} render={(props) => (
            loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to="/"/>
                // <Modal modal="entry"/>
                )
        )} />
    )
}

const Splashy = (props) => {
    let { component: Component, path, loggedIn, exact } = props;
    return (
        <Route path={path} exact={exact} render={(props) => (
            !loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to="/discover"/>
                // <Modal modal="entry"/>
                )
        )} />
    )
}

const msp = state => {
   return ( 
       { loggedIn: Boolean(state.session.id) }
    )
};

// const mdp = dispatch => ({
//     openModal: modal => dispatch(openModal(modal)),
//     closeModal: () => dispatch(closeModal()),
// });

// export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(msp, null)(Protected));
export const SplashyRoute = withRouter(connect(msp, null)(Splashy));
