import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();
    // console.log(user.email)
    useEffect(() => {
        fetch(`https://evil-spider-05883.herokuapp.com/mybookings/${user.email}`)
        .then(res=> res.json())
        .then(data=>{
            setOrders(data);
             console.log(data)
        })
        
    }, []);

    const handleDeleteOrder = id => {
        
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
            
            const url = `https://evil-spider-05883.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = orders.filter(order => order._id !== id);
                        setOrders(remainingUsers);
                    }
                });
        }
        
    }

    return (
        <div className="mybooking-container my-5">
            <h2 style={{color: 'orange'}}>Total Order : {orders?.length}</h2>
            <div className="container row my-5" style={{marginLeft: 'auto'}}>
            {
                orders?.map(order => <Card key={order.order.id} style={{ width: '18rem'}} className="m-2">
                <Card.Img variant="top" src={order.order.img} />
                <Card.Body>
                  <Card.Title>{order.order.name}</Card.Title>
                  <Card.Text>
                    {order.order.description}
                  </Card.Text>
                  <Button onClick={() => handleDeleteOrder(order._id)} variant="warning">Cancel Booking</Button>
                </Card.Body>
              </Card>)
            }
            </div>
        </div>
    );
};

export default MyOrders;