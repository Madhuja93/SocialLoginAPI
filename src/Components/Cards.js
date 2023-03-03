import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Where Shopping Meets Convenience</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Your one-stop-shop for all your tech needs'
              label='Electronics'
              path='/products'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Style that fits your personality'
              label='Apparel and Fashion'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Unlock your natural beauty'
              label='Beauty and Personal Care'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Fitness is our passion, let us inspire you'
              label='Sports and Fitness'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Satisfy your cravings with us'
              label='Food and Beverage'
              path='/products'
            />
            <CardItem
              src='images/img-10.jpg'
              text='Endless entertainment, endless fun'
              label='Entertainment'
              path='/sign-up'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;