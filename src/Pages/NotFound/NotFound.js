import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../Images/404not.PNG'
const NotFound = () => {
    return (
        <div className="mb-5">
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <Link to="/">  <Button variant="danger">Go Back</Button> 
            </Link>
        </div>
    );
};

export default NotFound;