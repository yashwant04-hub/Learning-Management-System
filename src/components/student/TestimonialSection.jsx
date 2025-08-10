import React from 'react';
import { dummyTestimonial, assets } from '../../assets/assets'; // Assuming 'assets' contains star and star_blank

const TestimonialsSection = () => {
  return (
    <div className="pb-14 px-8 md:px-0">
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className="md:text-base text-gray-500 mt-3">Hear from our learners as they share their journeys of transformation, success, and how our <br /> platform has made a difference in their lives.</p>

      {/* This is the main container for the horizontally scrolling testimonials */}
      {/* For horizontal scrolling and responsive behavior, often flexbox with overflow-x-auto is used */}
      <div className='flex overflow-x-auto gap-8 mt-14 py-4 scrollbar-hide'> {/* Added scrollbar-hide for a cleaner look if desired */}
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className='flex-shrink-0 w-80 text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden'
          >
            {/* Top section with image, name, and role */}
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
              <img className='h-12 w-12 rounded-full' src={testimonial.image} alt={testimonial.name} />
              <div>
                <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                <p className='text-gray-800/80'>{testimonial.role}</p>
              </div>
            </div>

            {/* Bottom section with stars and feedback */}
            <div className='p-5 pb-7'>
              <div className='flex gap-0.5 mb-4'> {/* Added margin-bottom for spacing */}
                {[...Array(5)].map((_, i) => (
                  <img
                    className='h-5 w-5' // Added w-5 for square stars
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt="star"
                  />
                ))}
              </div>
              <p className='text-gray-500 mt-5'>{testimonial.feedback}</p>
            </div>
            <a href="#" className='text-blue-500 underline px-5'>Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection;