import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import './Products.css';


const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() =>
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
        , []);


    return (
        <>
        <Header/>
            <section class="single_page_heading">
                <h1>Products</h1>
                <p> <a href="/">home</a> &#62;&#62; Products </p>
            </section>
            <section className="featured products" id="featured">
                <div className="featured-container products_container">
                {
                    products.map((product, index) => (
                        <div
                            className="box"
                            key={product._id}
                        >
                            <img src={product.services_photo} alt="" />
                            <div className="content">
                                <h3>{product.title}</h3>
                                <p>{product.description.slice(0,120)}</p>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div className="price">$ {product.price} /-</div>
                                <Link to={`/productsDetails/${product._id}`} className="btn">check out</Link>
                                {/* <div className="d-flex justify-content-between">
                            <a href="/" className="btn">check out</a>
                            <a href="/" className="btn">check out</a>
                        </div> */}
                            </div>
                        </div>
                    ))
                }
                </div>
            </section>
        </>
    );
};

export default Products;