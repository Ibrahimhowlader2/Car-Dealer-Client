import React, { useEffect, useState } from 'react';
import './Reviews.css';
import { Link } from 'react-router-dom';
import userTb from '../../../images/usertb.png';
;

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() =>
        fetch('http://localhost:5000/allReviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
        , []);
    return (
        <section className="reviews" id="reviews">
            <h1 className="heading"> <span className="heading_span">Client's <span>Reviews</span></span> </h1>
            <h1 className="title"> Our <span>reviews</span> <Link to="/allReviews">view all &#62;&#62;</Link> </h1>
            <div className="reviews-container">
                {
                    reviews.map(review => (
                        <div
                            key={review._id}
                            className=" box">
                            { review?.services_photo?
                                <img src={review?.services_photo} alt="" />
                                :
                                <img src={userTb} alt="" />
                            }
                            <h3>{review.client_name}</h3>
                            <p>{review.comment}</p>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    ))
                }


            </div>
        </section>
    );
};

export default Reviews;