import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './ManageOrders.css';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();
    const [control, setControl] = useState(false);
    const [orderId, setOrderId] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [control]);
    console.log(orders);

    // const status = "approved";
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };

    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if(result.acknowledged){
                    setControl(!control);
                }
            });
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
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
                <h1>Manage Orders</h1>
                <p> <a href="/"> <span>home</span> </a> <a href="/dashboard">&#62;&#62; <span>Dashboard</span></a> &#62;&#62; Manage Orders </p>
            </section>
            <section>
                <table class="table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Products</th>
                            <th>Customer</th>
                            <th>Price</th>
                            <th>Status Update</th>
                            <th>Status</th>
                            <th className="table_btn" >Delete</th>
                        </tr>
                    </thead>
                    {
                        orders?.map((pd, index) => (
                            <tbody>
                                <tr>
                                    <td data-label="S.No">{index}</td>
                                    <td data-label="Products">Products</td>
                                    <td data-label="Customer">Customer</td>
                                    <td data-label="Price">1200</td>
                                    <td data-label="Status-Update">
                                        <form className="manage_form" onSubmit={handleSubmit(onSubmit)}>
                                            <select
                                                onClick={() => handleOrderId(pd?._id)}
                                                {...register("status")}
                                            >
                                                <option
                                                    defaultValue={pd?.status}>{pd?.status}
                                                </option>
                                                <option
                                                
                                                    value="approve">approve
                                                </option>
                                                <option
                                                    value="done">Done
                                                </option>
                                            </select>
                                            <input  type="submit" />
                                        </form>
                                    </td>
                                    <td data-label="Status">{pd?.status}</td>
                                    <td className="table_btn" data-label="Delete">
                                        <button 
                                        onClick={() => handleDelete(pd?._id)}
                                        className="btn">Delete</button>
                                    </td>
                                </tr>

                            </tbody>
                        ))
                    }

                </table>
            </section>

        </>
    );
};

export default ManageOrders;