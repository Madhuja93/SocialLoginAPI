import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomeBody.css';
import first from '../Images2/1.jpg';
import second from '../Images2/2.jpg';
import third from '../Images2/3.jpg';

function HomeBody() {
  return (
    <>
    <div className='hero-btns'>
      <div className="hero-container" >
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1>Know Your Neighbourhood</h1>
        <p>Buy Now - What are you Waiting for</p>
        <div className="hero-btns">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        
        </div>
        </div>
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={first} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Freshly Baked Cupcakes</h5>
              <p>
                Delight your taste buds with our freshly baked cupcakes! Our
                cupcakes are made with the finest ingredients and are sure to
                satisfy your sweet tooth!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={second} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fresh Pizza from the Oven</h5>
              <p>
                Indulge in the ultimate comfort food with our mouth-watering
                pizzas!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={third} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Twirling spaghetti</h5>
              <p>
                Twirl your fork and taste the perfection - our spaghetti is the
                ultimate satisfaction!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBody;
