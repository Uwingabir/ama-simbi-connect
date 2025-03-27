
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "AMASIMBI helped me understand my reproductive health in a way that was comfortable and educational. The mentorship program has been incredibly valuable.",
    author: "Sarah, 17",
    role: "Student",
    highlight: true
  },
  {
    content: "As a mother, I struggled to talk to my daughter about reproductive health. The resources for parents have given me the confidence to have these important conversations.",
    author: "Linda, 42",
    role: "Parent"
  },
  {
    content: "The information is presented in an age-appropriate way that makes it easy to understand complex topics related to reproductive health.",
    author: "Michelle, 15",
    role: "High School Student"
  },
  {
    content: "I appreciate the privacy features that allow me to learn and ask questions without feeling embarrassed. It's a safe space for young women.",
    author: "Jessica, 19",
    role: "College Student"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 pill-primary mb-4">
            <span>Success Stories</span>
          </div>
          <h2 className="heading-lg mb-6">What Our Users Say</h2>
          <p className="paragraph text-gray-600">
            Hear from young women and parents who have benefited from AMASIMBI's resources and mentorship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl animate-fade-in-up ${
                testimonial.highlight 
                  ? 'bg-primary text-white' 
                  : 'glass-card'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className={`h-8 w-8 mb-4 ${
                testimonial.highlight ? 'text-white/70' : 'text-primary/50'
              }`} />
              <p className={`mb-6 ${
                testimonial.highlight ? 'text-white/90' : 'text-gray-600'
              }`}>
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  testimonial.highlight ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                }`}>
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className={`text-sm ${
                    testimonial.highlight ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
