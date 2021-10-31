import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import useFirebase from "../../hooks/useFirebase";
import './Booking.css';
import useAuth from "../../hooks/useAuth";

const Booking = () => {
  const { register, handleSubmit, reset, formState: { errors }} = useForm();
  const { user } = useAuth();
  console.log(user.displayName, user.email);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://evil-spider-05883.herokuapp.com/offerings/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const onSubmit = data => {
    const orderDetails = details;
    data.order =  orderDetails;
    data.status = 'pending';
    fetch('https://evil-spider-05883.herokuapp.com/myOrders', {
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
            alert('order processed successfully');
            reset();
        }
    })
};
  return (
    <div className="Booking-container container my-5">
        
      <div className="detail my-5">
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src={details.img} />
          <Card.Body>
            <Card.Title style={{color:'orange'}}>{details.name}</Card.Title>
            <Card.Text>{details.description}</Card.Text>
            <Card.Title style={{color:'orange'}}>Cost: {details.TotalCost} BDT per day</Card.Title>
          </Card.Body>
        </Card>
      </div>

      <div className="my-5">
        <h2 style={{color:'orange', marginBottom:'60px'}}>Please Fill this form!!!</h2>
        <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
          {user.displayName && <input defaultValue={user.displayName} {...register("name")} />}

          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Address"
            defaultValue=""
            {...register("address")}
          />
          
          <input
            placeholder="phone number"
            defaultValue=""
            {...register("phone")}
          />

          <input style={{backgroundColor: 'orange'}} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Booking;
