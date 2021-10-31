import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Offer = ({ offerings }) => {
    const {_id, name, img, description, TotalCost} = offerings;
  return (
    <Card className="col-md-4" style={{ width: "20rem" , margin: '10px'}} >
      <Card.Img variant="top" src={img} className="img-fluid" style={{height: '250px', width: '320px'}} />
      <Card.Body>
        <Card.Title style={{color: 'orange'}}>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Link to={`/booking/${_id}`}>
        <Button variant="warning">Book this site</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Offer;
