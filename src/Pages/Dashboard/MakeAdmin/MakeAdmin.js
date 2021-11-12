import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/makeAdmin", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
        // console.log(data);
      };
    return (
        <>
            <section class="add_content_heading">
                <h1>Make Admin</h1>
                <p> <a href="/"> <span>home</span> </a> <a href="/dashboard">&#62;&#62; <span>Dashboard</span></a> &#62;&#62; Make Admin </p>
            </section>
            <section className="add-form">
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="input-field"
                        name="email"
                        placeholder="Email"
                        type="email"
                        {...register("email", { required: true })}
                    />
                    <br />

                    <input
                        className="submit-btn btn btn-danger mt-3"
                        type="submit"
                        value="make as Admin"
                    />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                </form>
            </section>
        </>
    );
};

export default MakeAdmin;