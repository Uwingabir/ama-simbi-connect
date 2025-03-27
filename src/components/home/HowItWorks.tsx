
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  UserPlus, 
  Lightbulb, 
  Users, 
  MessageSquare,
  ChevronRight
} from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="h-6 w-6 text-white" />,
    title: 'Create an Account',
    description: 'Sign up for a free account as a young person or parent to access resources.',
    color: 'bg-primary'
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-white" />,
    title: 'Access Education Resources',
    description: 'Browse through age-appropriate content on reproductive health.',
    color: 'bg-secondary'
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: 'Connect with Mentors',
    description: 'Get paired with experienced mentors who can provide guidance.',
    color: 'bg-amasimbi-600'
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-white" />,
    title: 'Participate in Discussions',
    description: 'Join moderated discussions or ask questions privately.',
    color: 'bg-rose-600'
  }
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 pill-primary mb-4">
            <span>Simple Process</span>
          </div>
          <h2 className="heading-lg mb-6">How AMASIMBI Works</h2>
          <p className="paragraph text-gray-600">
            Getting started with AMASIMBI is easy. Follow these simple steps to access our resources and support.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-12 h-[calc(100%-80px)] w-1 bg-gray-200 -translate-x-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative ${index % 2 === 0 ? 'md:text-right' : ''} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-6 w-4 h-4 rounded-full bg-white border-4 border-primary -translate-x-1/2 hidden md:block"></div>
                
                <div className={`relative premium-card p-6 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mb-4 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {step.icon}
                  </div>
                  <h3 className="heading-sm mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center animate-fade-in">
          <Link to="/register">
            <Button className="btn-primary">
              Get Started Now <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
