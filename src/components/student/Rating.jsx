import React, { useState, useEffect } from 'react';

const Rating = ({ initialRating, onRate }) => {
  // Initialize rating state with initialRating prop or 0 if not provided.
  const [rating, setRating] = useState(initialRating || 0);

  // handleRating function to update the state and call the onRate callback
  const handleRating = (value) => {
    setRating(value);
    if (onRate) 
      onRate(value);
    
  };

  useEffect(() => {
    if (initialRating) {
      setRating(initialRating)
    }
  }, [initialRating]);

  return (
    <div>
      {Array.from({length: 5}, (_, index)=>{
        const starValue = index + 1;
        return (
         <span key={index} className={`text-xl sm:text-2xl
  cursor-pointer transition-colors ${starValue <= rating ?
  'text-yellow-500' : 'text-gray-400'}`} onClick={() => handleRating(starValue)} >
  &#9733;
</span>
        )
      })}
    </div>
  )
}

export default Rating