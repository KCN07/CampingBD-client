import React from 'react';

const Footer = () => {
    return (
        <div
      style={{
        backgroundColor: "black",
        textAlign: "center",
        color: "white",
        fontFamily: "serif",
        
      }}
      className="p-5"
    >
      <h2 className="mb-5" >CampingBD | Top camping site booking site in Bangladesh.</h2>
      
      <h2 className="mb-5 border-bottom " style={{display:'inline'}}>Connect</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}className="my-5">
          <a href="#" style={{textDecoration: 'none', color: 'white', fontSize: '20px'}}><i class="fab fa-facebook-f me-3"></i>Facebook</a>
          <a href="#" style={{textDecoration: 'none', color: 'white', fontSize: '20px'}}><i class="fab fa-instagram me-3"></i>Instagram</a>
          <a href="#" style={{textDecoration: 'none', color: 'white', fontSize: '20px'}}><i class="fab fa-twitter me-3"></i>Twitter</a>
          <a href="#" style={{textDecoration: 'none', color: 'white', fontSize: '20px'}}><i class="fab fa-pinterest-p me-3"></i>Pinterest</a>

      </div>

      <div style={{borderBottom: '1px solid white', paddingBottom:'10px',}}>
          <a href="#" style={{textDecoration: "none", color: "white", marginRight: "15px", fontSize:"18px"}}>Disclaimer</a>
          <a href="#" style={{textDecoration: "none", color: "white", marginRight: "15px", fontSize:"18px"}}>Website Privacy</a>
          <a href="#" style={{textDecoration: "none", color: "white", marginRight: "15px", fontSize:"18px"}}>Contact Web Administrator</a>
          <a href="#" style={{textDecoration: "none", color: "white", marginRight: "15px", fontSize:"18px"}}>Nondiscrimination Policy</a>
          <a href="#" style={{textDecoration: "none", color: "white", marginRight: "15px", fontSize:"18px"}}>Equal Employment Opportunity</a>
      </div>
      <p className="m-4">© 2021 CampingBD. All rights reserved.</p>

      
    </div>
    );
};

export default Footer;