import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const onClick=()=>{
    console.log('clic');
//    startLogin();
  
};

export const LoginPage = ({ startLogin }) => (
    <div>
        <button onClick={startLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
