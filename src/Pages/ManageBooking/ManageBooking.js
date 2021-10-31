import React, { useEffect, useState } from 'react';
import { Card , Button} from 'react-bootstrap';

const ManageBooking = () => {
    const [bookings, setBookings] = useState([]);
    

    useEffect(() => {
        fetch(`https://evil-spider-05883.herokuapp.com/bookings`)
        .then(res=>res.json())
        .then(data => setBookings(data))

    }, []);

    const handleUpdateOrder = id =>{
        const url = `https://evil-spider-05883.herokuapp.com/orders/${id}`;
        const booking = bookings.filter(item => {
            return item._id === id;
        })
         booking[0].status = 'Approved';
        console.log(booking[0]);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking[0])
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Updated Successfully');
                
            }
        })
        
    }
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
                        const remainingBooking = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBooking);
                    }
                });
        }
        
    }
    return (
        <div className="manage-booking  my-5">
            <h2 className="my-5" style={{color: 'orange'}}>Manage All Booking</h2>
            <div className="booking-container row container" style={{marginLeft: 'auto', }}>
                {
                    bookings.map(booking=> <Card key={booking.order.email} style={{ width: '18rem' }} className="m-2">
                    <Card.Img variant="top" src={booking.order.img} />
                    <Card.Body>
                      <Card.Title>{booking.order.name}</Card.Title>
                      <Card.Text>
                        {booking.order.description}
                      </Card.Text>
                      <Card.Title>Total Cost: {booking.order.TotalCost} BDT</Card.Title>
                      <Button onClick={() => handleUpdateOrder(booking._id)} variant="primary" className="me-2">{booking.status}</Button>
                      <Button onClick={() => handleDeleteOrder(booking._id)} variant="warning">Cancel Booking</Button>
                    </Card.Body>
                  </Card>)
                }
            </div>
        </div>
    );
};

export default ManageBooking;