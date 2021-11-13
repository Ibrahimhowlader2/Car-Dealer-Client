import React, { useEffect, useState } from 'react';
import './OurProducts.css';
import { Link } from 'react-router-dom';

const OurProducts = () => {

    const [ourProducts, setOurProducts] = useState([])

    useEffect(() =>
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOurProducts(data)
            })
        , []);

    return (
        <section className="featured" id="featured">
            <h1 className="heading"> <span className="heading_span">Featured <span>Cars</span></span> </h1>
            <h1 className="title"> Our <span >products</span> <Link to="/products">view all &#62;&#62;</Link> </h1>
            <div className="featured-container">
                {
                    ourProducts.slice(0, 6).map((ourProduct, index) => (
                        <div
                            className="box"
                            key={ourProduct._id}
                        >
                            <img src={ourProduct.services_photo} alt="" />
                            <div className="content">
                                <h3>{ourProduct.title}</h3>
                                <p>{ourProduct.description.slice(0, 200)}</p>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div className="price">$ {ourProduct.price} /-</div>
                                <Link
                                    to={`/productsDetails/${ourProduct._id}`} 
                                    className="btn">Buy Now
                                </Link>
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
    );
};

export default OurProducts;