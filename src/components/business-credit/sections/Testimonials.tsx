import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "My credit was really bad. They really helped me now. I'm buying a house.",
      author: "Business Owner",
      location: "Bakersfield, CA",
      rating: 5
    },
    {
      quote: "Evert is amazing! The best! Helped me out from my bankruptcy and starting new credit for my business.",
      author: "Small Business Owner",
      location: "Bakersfield, CA",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-amber-600">720+</span> Bakersfield Business Owners
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-amber-400">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9c65d] fill-[#f9c65d]" />
                ))}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6">"{testimonial.quote}"</blockquote>
              <div className="font-semibold text-gray-900">{testimonial.author}</div>
              <div className="text-sm text-gray-600">{testimonial.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
