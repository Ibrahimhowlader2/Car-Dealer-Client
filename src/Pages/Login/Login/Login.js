import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import './Login.css';

const Login = () => {

    const [loginData, setLoginData] = useState({});

    const { user, authError, loginUser, signInWithGoogle, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <>
            <Header />
            <section class="single_page_heading">
                <h1>account</h1>
                <p> <Link to="/">home</Link> &#62;&#62; login </p>
            </section>
            <section class="login-form">

                <div className="form_container">
                    <form onSubmit={handleLoginSubmit}>
                        <h3>user login</h3>
                        <div class="inputBox">
                            <span class="fas fa-user"></span>
                            <input
                                type="email"
                                name="email"
                                placeholder="enter your email"
                                id="email"
                                onBlur={handleOnChange}
                            />
                        </div>
                        <div class="inputBox">
                            <span class="fas fa-lock"></span>
                            <input
                                type="password"
                                name="password"
                                placeholder="enter your password"
                                id="password"
                                onBlur={handleOnChange}
                            />
                        </div>
                        <input type="submit" value="sign in" class="btn" />
                        <div class="flex">
                            <input type="checkbox" name="" id="remember-me" />
                            <label htmlFor="remember-me">remember me</label>
                            <a href="/">forgot password?</a>
                        </div>
                        <Link to="/register" class="already_acc">create an account</Link>
                        <div className="py-3 fs-4">-----------------Or-----------------</div>
                        
                    </form>
                    <button onClick={handleGoogleSignIn} class="btn">Sign In With Google</button>
                </div>
                {
                    isLoading && <div class="text-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
                {
                    user?.email && <div class="success_error alert alert-success" role="alert">
                        Login Successfully !
                    </div>
                }
                {
                    authError && <div class="success_error alert alert-danger" role="alert">
                        {authError}
                    </div>
                }

            </section>
        </>
    );
};

export default Login;