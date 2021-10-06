import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__backToTop" href=".home">
        Back to top
      </p>
      <div className="footer__container">
        <div className="footer__div">
          <strong>Get to Knows Us</strong>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
          <p>Gift a Smile</p>
        </div>
        <div className="footer__div">
          <strong>Connect with Us</strong>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer__div">
          <strong>Make Money with Us</strong>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>
        <div className="footer__div">
          <strong>Let Us Help You</strong>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Amazon Assistant Download</p>
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
