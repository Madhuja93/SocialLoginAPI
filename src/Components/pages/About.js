import React from "react";
import './About.css'
import Footer from "../Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
          <br></br><h1>About KYN</h1>
            <p>Welcome to our KYN online shopping app!</p>

            <p>We are a team of passionate individuals who are dedicated to providing you with a seamless and enjoyable shopping experience. Our mission is to offer you the best quality products at affordable prices, delivered to your doorstep in a timely manner.</p>

            <p>Our app was created with the intention of making shopping easy and convenient for you. With just a few clicks, you can browse through our vast collection of products, add them to your cart, and make a secure payment using a variety of payment options.</p>

            <p>We are committed to providing you with excellent customer service. Our friendly and knowledgeable customer support team is available 24/7 to answer any questions or concerns you may have. We value your feedback and suggestions, and use them to improve our app and services.</p>

            <p>At our online shopping app, we believe in sustainability and ethical business practices. We work with suppliers who share our values and strive to reduce our carbon footprint by using eco-friendly packaging materials.</p>

            <p>Thank you for choosing our online shopping app. We hope you enjoy your shopping experience with us and look forward to serving you in the future.</p>
        
          <br></br>
          <br></br>
          <br></br></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
