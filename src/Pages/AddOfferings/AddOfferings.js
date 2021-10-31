import React from "react";
import { useForm } from "react-hook-form";
import './AddOfferings.css'

const AddOfferings = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    fetch('http://localhost:5000/offerings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(result => {
        // console.log(result);
        if(result.insertedId){
            alert('added successfully');
            reset();
        }
    })
  };
  return (
    <div className="add-service form my-5">
      <h2 style={{ color: "orange" }}>Add a new Offerings</h2>
      <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="title"  {...register("name")} />

          
          <textarea {...register("description")} placeholder="description" />
          
          <input
            placeholder="Price"
            defaultValue=""
            {...register("phone")}
          />
          <input {...register("img")} placeholder="image url" />

          <input style={{backgroundColor: 'orange'}} type="submit" />
        </form>
    </div>
  );
};

export default AddOfferings;
