import React from 'react';

const Campbd = () => {
    return (
        <div className="p-5" style={{backgroundColor: 'gray', color: "white" }}>
            <h2 style={{color: 'orange'}}>Why CampingBD ?</h2>
            <div className="row">
                <div className="col-md-4">
                    <h3>Your favorite campgrounds</h3>
                    <p>
                    CampingBD lists top-rated camping destinations available for online booking in Bangladesh. Discover campgrounds big and small, RV parks, glamping, and more.
                    </p>

                </div>
                <div className="col-md-4">
                    <h3>Instant booking</h3>
                    <p>No need to call the campground or wait for your booking to be accepted. We integrate directly with campground reservation systems to confirm bookings instantly.</p>
                </div>
                <div className="col-md-4">
                    <h3>Low price guarantee</h3>
                    <p>CampingBD partners with all of our listed campgrounds to get real-time pricing, guaranteeing you're always getting the best deal.</p>
                </div>
            </div>
        </div>
    );
};

export default Campbd;