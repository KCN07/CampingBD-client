import React from "react";
import { Card, Button } from "react-bootstrap";

const Fascilities = () => {
  return (
    <div className="container my-5" id="fascilities">
      <h2 className="mb-5 " style={{color: 'orange', borderBottom: '4px solid orange', display: 'inline-block'}}>
        Join CampingBD today !
      </h2>
      <div className="row container" style={{marginRight:'auto', marginLeft: 'auto'}}>
        <Card style={{ width: "18rem" , margin: '10px'}}>
          <Card.Img variant="top" src="https://www.getapexclub.com/wp-content/uploads/2020/07/camp-sized.jpg" />
          <Card.Body>
            <Card.Title>Win Free Trips and Gear</Card.Title>
            <Card.Text>
            Members are automatically entered into our monthly drawings for the latest camping gear, technology, trips, outdoor apparel and more!
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" , margin: '10px'}}>
          <Card.Img variant="top" src="https://www.getapexclub.com/wp-content/uploads/2020/08/benefits-member-deals.jpg" />
          <Card.Body>
            <Card.Title>Exclusive Member Deals</Card.Title>
            <Card.Text>
            Members get access to exclusive savings up to 35% off on gear, accessories, apparel, and experiences from some of the top outdoor brands.
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: '10px' }}>
          <Card.Img variant="top" src="https://www.getapexclub.com/wp-content/uploads/2020/07/sign-sized.jpg" />
          <Card.Body>
            <Card.Title>Save Instantly on Reservations</Card.Title>
            <Card.Text>
            Looking for a new destination and a great deal? Save time and money with Member-Only discounts at select partner campgrounds, parks, and resorts on BookYourSite.com! Plus members save 10% instantly on over 500 participating Tentrr locations across whole country!
            </Card.Text>
            
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Fascilities;
