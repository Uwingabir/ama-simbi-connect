
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MessageCircle, Users, ArrowRight, BookOpen } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const parentResources = [
  {
    title: "Starting Conversations",
    description: "How to initiate discussions about reproductive health with your children in a comfortable way.",
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
    link: "/parents/starting-conversations"
  },
  {
    title: "Age-Appropriate Topics",
    description: "Guide to what reproductive health topics are appropriate at different ages and developmental stages.",
    icon: <Users className="h-6 w-6 text-primary" />,
    link: "/parents/age-appropriate"
  },
  {
    title: "Answering Difficult Questions",
    description: "How to respond to challenging questions about sex, reproduction, and relationships.",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    link: "/parents/difficult-questions"
  }
];

const testimonials = [
  {
    quote: "AMASIMBI gave me the confidence to talk to my daughter about reproductive health. The resources provided clear guidance on how to approach these sensitive topics.",
    author: "Maria J.",
    role: "Mother of a 14-year-old"
  },
  {
    quote: "As a single father, I struggled with how to discuss menstruation with my daughter. The parent resources on AMASIMBI were invaluable in helping me navigate these conversations.",
    author: "David L.",
    role: "Father of a 13-year-old"
  }
];

const Parents = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 md:px-12 bg-gradient-to-br from-white via-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center gap-2 pill-primary">
                  <span>For Parents</span>
                </div>
                
                <h1 className="heading-xl">
                  Guide to Discussing
                  <span className="bg-gradient-to-r from-primary to-amasimbi-400 bg-clip-text text-transparent"> Reproductive Health</span>
                </h1>
                
                <p className="paragraph-lg text-gray-600 max-w-xl">
                  Resources to help parents approach conversations about reproductive health with their children in a comfortable and informative way.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button size="lg" className="btn-primary rounded-full">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link to="/register">
                    <Button variant="outline" size="lg" className="btn-outline rounded-full">
                      Create Account
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative animate-fade-in-up">
                <div className="relative z-10 aspect-square max-w-md mx-auto">
                  <div className="absolute top-5 left-5 w-64 h-64 rounded-full bg-primary/10 animate-float"></div>
                  <div className="absolute bottom-5 right-5 w-48 h-48 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: '1s' }}></div>
                  
                  <div className="relative z-20 glass-card rounded-3xl p-8 max-w-md mx-auto">
                    <div className="space-y-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white">
                          <MessageCircle className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-medium">Parent Resources</h3>
                          <p className="text-sm text-gray-500">Guidance & Support</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-xl p-3">
                          <p className="text-sm">How to start conversations about reproductive health</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3">
                          <p className="text-sm">Age-appropriate topics for different stages</p>
                        </div>
                        <div className="bg-secondary/5 rounded-xl p-3 border-l-4 border-secondary">
                          <p className="text-sm font-medium">Expert guidance from healthcare professionals</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2 className="heading-lg mb-6">Resources for Parents</h2>
              <p className="paragraph text-gray-600">
                Explore our comprehensive guides to help you navigate conversations about reproductive health with your children.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animated-grid">
              {parentResources.map((resource, index) => (
                <Link 
                  key={index} 
                  to={resource.link}
                  className="premium-card p-6 card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="heading-sm mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center gap-2 text-primary">
                    <span className="font-medium">Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Parent Testimonials */}
        <section className="py-16 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 pill-primary mb-4">
                <span>Parent Stories</span>
              </div>
              <h2 className="heading-lg mb-6">Hear From Other Parents</h2>
              <p className="paragraph text-gray-600">
                Read about how other parents have used AMASIMBI to approach conversations with their children.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="premium-card p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                      <div>
                        <h4 className="font-medium">{testimonial.author}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center animate-fade-in">
              <Link to="/register">
                <Button className="btn-primary">
                  Join Our Parent Community <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
              <p className="paragraph text-gray-600">
                Common questions from parents about reproductive health education
              </p>
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <div className="premium-card p-6">
                <h3 className="heading-sm mb-2">When should I start talking to my child about reproductive health?</h3>
                <p className="text-gray-600">
                  Conversations should begin early in an age-appropriate way. For young children, this might be about body parts and privacy. As they grow, the conversations can evolve with their development and curiosity.
                </p>
              </div>
              
              <div className="premium-card p-6">
                <h3 className="heading-sm mb-2">How do I know what information is age-appropriate?</h3>
                <p className="text-gray-600">
                  Our resources are categorized by age group, providing guidance on what topics are appropriate at each developmental stage. Generally, answer questions honestly but with information that matches their level of understanding.
                </p>
              </div>
              
              <div className="premium-card p-6">
                <h3 className="heading-sm mb-2">What if I don't know the answer to my child's question?</h3>
                <p className="text-gray-600">
                  It's perfectly fine to say "I'm not sure, but I'll find out" and then research the answer together or on your own. AMASIMBI provides reliable information that you can reference.
                </p>
              </div>
              
              <div className="premium-card p-6">
                <h3 className="heading-sm mb-2">How can I overcome my own discomfort when discussing these topics?</h3>
                <p className="text-gray-600">
                  Many parents feel uncomfortable at first. Our resources include tips for managing your own feelings while having these conversations. Remember that your slight discomfort is worth it for your child's health and safety.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Parents;
