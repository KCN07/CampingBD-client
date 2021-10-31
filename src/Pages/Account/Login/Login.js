import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import useFirebase from "../../../hooks/useFirebase";
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="container m-5">
            <h1 className="m-5 pb-4" style={{color: "orange", borderBottom: '1px solid orange'}}>Please Sign in for amaging experience!!!</h1>

            <p className='mb-5'>
                Dear Campers, You have to sign in first for exploring and enjoying more facilities from CampingBD. For signing in click below..
            </p>
            <button
                    className="btn btn-warning mb-5" 
                    style={{color: "white", fontWeight: 'bold'}}
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            
        </div>
    );
};

export default Login;