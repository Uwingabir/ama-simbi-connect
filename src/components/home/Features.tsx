
import React from 'react';
import { Book, Shield, Users, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: <Book className="h-6 w-6 text-primary" />,
    title: 'Reproductive Health Education',
    description: 'Age-appropriate content based on scientifically valid reproductive health information including contraceptive methods and menstrual health.'
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Mentorship Programs',
    description: 'Connect with mentors who can provide guidance, answer questions, and support you through challenges during adolescence.'
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
    title: 'Parental Guidance',
    description: 'Resources to help parents approach conversations about reproductive health with their children in a comfortable and informative way.'
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Privacy & Security',
    description: 'Your data is encrypted and secure. We provide anonymity options for users who prefer discretion when seeking mentorship or information.'
  }
];

const Features = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 pill-primary mb-4">
            <span>Our Offerings</span>
          </div>
          <h2 className="heading-lg mb-6">Supporting Young Women and Parents</h2>
          <p className="paragraph text-gray-600">
            Our platform provides comprehensive resources and support through these key features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animated-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="premium-card p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="heading-sm mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
