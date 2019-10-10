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

const cpb = (props) => {
    let { component: Component, path, currentTrack, exact } = props;
    return (
        <Route path={path} exact={exact} render={(props) => (
            currentTrack ? (
                <Component {...props} />
            ) : (
                null
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
                )
        )} />
    )
}

const msp = state => {
   return ( 
       { 
           loggedIn: Boolean(state.session.id),
            currentTrack: Boolean(state.entities.currentTrack)
        }
    )
};

// const mdp = dispatch => ({
//     openModal: modal => dispatch(openModal(modal)),
//     closeModal: () => dispatch(closeModal()),
// });

// export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(msp, null)(Protected));
export const SplashyRoute = withRouter(connect(msp, null)(Splashy));
export const CPBRoute = withRouter(connect(msp, null)(cpb));
