import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {

    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyOrders(data)
                console.log(data);
            });
    }, [user?.email,control]);

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
                <h1>My Orders {myOrders.length}</h1>
                <p> <a href="/"> <span>home</span> </a> &#62;&#62; My Orders</p>
            </section>
            <section>
                <table class="table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Products</th>
                            <th>Customer</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th className="table_btn" >Cancel Order</th>
                        </tr>
                    </thead>
                    {
                        myOrders?.map((pd, index) => (
                            <tbody
                            key={pd._id}
                            >
                                <tr>
                                    <td data-label="S.No">{index}</td>
                                    <td data-label="Products">Products</td>
                                    <td data-label="Customer">Customer</td>
                                    <td data-label="Price">1200</td>
                                    <td data-label="Status">{pd?.status}</td>
                                    <td className="table_btn" data-label="Cancel">
                                        <button
                                        onClick={() => handleDelete(pd?._id)}
                                         className="btn">Cancel</button>
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

export default MyOrders;