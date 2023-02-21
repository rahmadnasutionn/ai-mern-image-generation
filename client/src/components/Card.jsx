import React from 'react';

import { download } from '../assets';
import { downloadImage } from '../utils'

const Card = ({ _id, photo, prompt, name }) => {
  return (
    <div className='relative group rounded-xl shadow-card hover:shadow-cardhover card'>
      <img
       className='w-full h-auto object-center rounded-xl'
       src={photo}
       alt={prompt}
      />
    </div>
  );
};

export default Card;