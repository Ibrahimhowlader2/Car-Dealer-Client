import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageProducts.css';


const ManageProducts = () => {

    const [products, setProducts] = useState([])
    const [control, setControl] = useState(false);

    useEffect(() =>
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
        , [control]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
        console.log(id);
    };


    return (
        <>
            <section class="add_content_heading">
                <h1>Manage Products</h1>
                <p> <a href="/"> <span>home</span> </a> <a href="/dashboard">&#62;&#62; <span>Dashboard</span></a> &#62;&#62; Manage Products </p>
            </section>
            <section className="featured manage_products" id="featured">
                <div className="featured-container manage_container">
                    {
                        products.map((product, index) => (
                            <div
                                className="box"
                                key={product._id}
                            >
                                <img src={product.services_photo} alt="" />
                                <div className="content">
                                    <h3>{product.title}</h3>
                                    <p>{product.description.slice(0, 120)}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="price">$ {product.price} /-</div>
                                        <div className="stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <Link to="/">
                                            <button className="btn">Update</button>
                                        </Link>
                                        <button
                                        onClick={() => handleDelete(product?._id)}
                                        className="btn">Delete</button>
                                </div>
                            </div>
                            </div>
                ))
                    }
            </div>
        </section>
        </>
    );
};

export default ManageProducts;