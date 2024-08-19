import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay,
  FaGooglePay,
} from "react-icons/fa"; 
import { HiOutlineMail } from "react-icons/hi";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-section-cta">
          <h3 className="footer-section-cta-heading">
            Stay Up to Date About Our Latest Offers
          </h3>
          <form className="footer-section-subscription-form">
            <label>
              <HiOutlineMail />
              <input type="email" placeholder="Enter your email address" />
            </label>
            <button type="submit">Subscribe to Newsletter</button>
          </form>
        </div>

        <div className="footer-section-content">
          <div className="footer-section-content-left">
            <h4>Shop.co</h4>
            <p className="footer-section-description">
              We have clothes that suit your style and which you're proud to wear. 
              From women to men.
            </p>
            <div className="footer-section-social-icons">
              <div className="footer-section-social-icon">
                <FaFacebookF />
              </div>
              <div className="footer-section-social-icon">
                <FaTwitter />
              </div>
              <div className="footer-section-social-icon">
                <FaInstagram />
              </div>
              <div className="footer-section-social-icon">
                <FaGithub />
              </div>
            </div>
          </div>

          <div className="footer-section-content-right">
            <div className="footer-section-links">
              <p className="footer-section-link-heading">Company</p>
              <p className="footer-section-link-item">About</p>
              <p className="footer-section-link-item">Features</p>
              <p className="footer-section-link-item">Works</p>
              <p className="footer-section-link-item">Career</p>
            </div>

            <div className="footer-section-links">
              <p className="footer-section-link-heading">Help</p>
              <p className="footer-section-link-item">Customer Support</p>
              <p className="footer-section-link-item">Delivery Details</p>
              <p className="footer-section-link-item">Terms & Conditions</p>
              <p className="footer-section-link-item">Privacy Policy</p>
            </div>

            <div className="footer-section-links">
              <p className="footer-section-link-heading">FAQ</p>
              <p className="footer-section-link-item">Account</p>
              <p className="footer-section-link-item">Manage Deliveries</p>
              <p className="footer-section-link-item">Orders</p>
              <p className="footer-section-link-item">Payments</p>
            </div>

            <div className="footer-section-links">
              <p className="footer-section-link-heading">Resources</p>
              <p className="footer-section-link-item">Free eBooks</p>
              <p className="footer-section-link-item">Development Tutorial</p>
              <p className="footer-section-link-item">How to - Blog</p>
              <p className="footer-section-link-item">YouTube Playlist</p>
            </div>
          </div>
        </div>

        <div className="footer-section-footer-bottom">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="footer-section-payment-icons">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaApplePay />
            <FaGooglePay />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
