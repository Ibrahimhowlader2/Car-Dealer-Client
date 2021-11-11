import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';


const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <section className="fixed-top bg-white  shadow">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/products">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/allReviews">Our Reviews</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                        <div class="d-flex">

                            {
                                user?.email ?
                                    <div>
                                        <>
                                        <span className="user-name">{user.displayName} : </span>
                                        <button onClick={logOut} className="tb_btn"> Log Out </button>
                                        </>

                                        <Link to="/dashboard"><button className="tb_btn ms-3"> <i class="far fa-user"></i> Admin  </button></Link>
                                        
                                    </div>
                                    :
                                    <Link to="/login"><button className="tb_btn"> Login </button></Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Header;