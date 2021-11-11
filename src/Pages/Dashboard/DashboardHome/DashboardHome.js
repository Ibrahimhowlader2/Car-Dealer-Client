import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddProducts from '../AddProducts/AddProducts';
import AddReviews from '../AddReviews/AddReviews';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import MyOrders from '../MyOrders/MyOrders';
import './DashboardHome.css';

const DashboardHome = () => {

    const { user, logOut } = useAuth();

    let { path, url } = useRouteMatch();
    const [isOpen, setIsOpen] = useState(true);

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);


    return (
        <div className="d-flex" id="wrapper">
            {isOpen &&
                <div className="bg-white" id="sidebar-wrapper">
                    <div className="sidebar-heading text-center py-4 primary-text fw-bold text-uppercase border-bottom">
                        <i className="fas fa-user-secret me-2"></i> Codersbite
                    </div>
                    <div className="list-group list-group-flush my-3">
                        <Link to={`${url}`} className="list-group-item list-group-item-action bg-transparent second-text active">
                            <i className="fas fa-tachometer-alt me-2"></i> Dashboard
                        </Link>
                        <Link to={`${url}/addReview`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                            <i className="fas fa-project-diagram me-2"></i> Add Review
                        </Link>
                        {isAdmin &&
                            <Link to={`${url}/addProduct`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                                <i className="fas fa-project-diagram me-2"></i> Add Product
                            </Link>}
                        {isAdmin &&
                            <Link to={`${url}/makeAdmin`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                                <i className="fas fa-project-diagram me-2"></i> Make Admin
                            </Link>}
                        {isAdmin &&
                            <Link to={`${url}/manageOrders`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                                <i className="fas fa-project-diagram me-2"></i> Manage Orders
                            </Link>}

                        <Link to="/login" onClick={logOut} className="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
                            <i className="fas fa-power-off me-2"></i> Logout
                        </Link>
                    </div>
                </div>}

            <div id="page-content-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                    <div onClick={() => setIsOpen(!isOpen)} className="dashboard d-flex align-items-center">
                        <i className="fas fa-align-left primary-text me-3" id="menu-toggle"></i>
                        <h2 className=" m-0">Dashboard</h2>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle second-text fw-bold" href="/" id="navbarDropdown"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-user me-2"></i>{user.displayName}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Home</a></li>
                                    <li><a className="dropdown-item" href="/products">Products</a></li>
                                    <li><Link onClick={logOut} className="dropdown-item" to="/login">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container-fluid">


                    <div className="row ">

                        <Switch>
                            <Route exact path={path}>
                                <MyOrders />
                            </Route>
                            <Route exact path={`${path}/addReview`}>
                                <AddReviews />
                            </Route>
                            <Route exact path={`${path}/addProduct`}>
                                <AddProducts />
                            </Route>
                            <Route exact path={`${path}/makeAdmin`}>
                                <MakeAdmin />
                            </Route>
                            <Route exact path={`${path}/manageOrders`}>
                                <ManageOrders />
                            </Route>
                            <Route path={`${path}/manageServices`}>

                            </Route>
                        </Switch>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashboardHome;