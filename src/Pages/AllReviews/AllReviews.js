import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';

const AllReviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() =>
        fetch('http://localhost:5000/allReviews')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
        , []);


    return (
        <>
            <Header />
            <section class="single_page_heading">
                <h1>Client's Reviews</h1>
                <p> <a href="/">home</a> &#62;&#62; Reviews </p>
            </section>
            <section className="reviews" id="reviews">
                <div className="reviews-container">
                    {
                        reviews.map(review => (
                            <div
                                key={review._id}
                                className=" box">
                                <img src={review?.services_photo} alt="" />
                                <h3>{review.client_name}</h3>
                                <p>{review.comment}</p>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </section>
        </>
    );
};

export default AllReviews;