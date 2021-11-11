import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import { useHistory, useLocation, useParams } from 'react-router';
import Header from '../Shared/Header/Header';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const ProductDetails = () => {

    const location = useLocation()
    const history = useHistory()

    const { user } = useAuth();
    const { productId } = useParams();
    const [details, setDetails] = useState({});

    const {
        register,
        handleSubmit,
        // reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const destination = location?.state?.from || '/products';
        history.replace(destination);
        data.email = user?.email;
        data.status = "pending";
        fetch('http://localhost:5000/addOrders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                /* if(result.data.insertedId){
                    alert('Added Successfully');
                    reset();
                } */
            })
        console.log(data);

    }


    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${productId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header />
            <section class="single_page_heading">
                <h1>Details</h1>
                <p> <a href="/">home</a> &#62;&#62; Details </p>
            </section>
            <section className="details row">

                <div className="col-md-6">
                    <div className="image content">
                        <img src={details.services_photo} alt="" />
                        <h3>{details.title}</h3>
                        <p> {details.description} </p>
                        <p><strong className="days">{details.days}</strong> <strong className="price">$ {details.price}</strong></p>
                        {/* <Link to="/"> Order </Link> */}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="order_form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("title")}
                                placeholder="Title"
                                defaultValue={details.title}
                                className="input-fill"
                            />
                            <br />

                            {/* <input
                        {...register("email", { required: true })}
                        placeholder="Email"
                        className="input-fill"
                    />
                    <br /> */}
                            <textarea
                                {...register("description", { required: true })}
                                placeholder="Description"
                                defaultValue={details.description}
                                className="input-fill"
                            />
                            <br />
                            <input
                                {...register("services_photo", { required: true })}
                                placeholder="Photo Url"
                                defaultValue={details.services_photo}
                                className="input-fill"
                            />
                            <br />
                            <input
                                {...register("Review", { required: true })}
                                placeholder="Review"
                                defaultValue={details.Review}
                                className="input-fill"
                            />
                            <br />
                            <input
                                {...register("price", { required: true })}
                                placeholder="$ cost"
                                defaultValue={details.price}
                                type="number"
                                className="input-fill"
                            />
                            <br />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Order Now" className="btn" />
                        </form>
                    </div>
                </div>



            </section>
        </>
    );
};

export default ProductDetails;