import React, { useEffect, useState } from 'react';
import Offer from '../Offer/Offer';
import './Offerings.css'
const Offerings = () => {
    const [offerings, setOfferings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/offerings`)
        .then(res=>res.json())
        .then(data => setOfferings(data))
    }, [])
    return (
        <div id="offerings" className="mb-5">
            <h1 className='my-5' style={{color: 'orange', borderBottom: '4px solid orange', display: 'inline-block'}}>Explore Our Campsites</h1>
            <div className="offerings-container container row " style={{marginLeft:'auto', marginRight:'auto'}}>
                {
                    offerings.map(offering => <Offer 
                        key={offering._id}
                        offerings={offering}
                    ></Offer>)
                }
            </div>
        </div>
    );
};

export default Offerings;