
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Users, Shield, Calendar, MessageCircle, ArrowRight, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const mentors = [
  {
    name: "Dr. Sarah Johnson",
    role: "Gynecologist",
    bio: "Specializes in adolescent reproductive health with over 15 years of experience.",
    image: "SJ",
    bgColor: "bg-primary"
  },
  {
    name: "Maria Nzomo",
    role: "Reproductive Health Educator",
    bio: "Passionate about educating young women on menstrual health and reproductive rights.",
    image: "MN",
    bgColor: "bg-secondary"
  },
  {
    name: "Grace Mutua",
    role: "Youth Counselor",
    bio: "Helps young women navigate the emotional aspects of adolescence and relationships.",
    image: "GM",
    bgColor: "bg-amasimbi-600"
  }
];

const programFeatures = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Matched Mentorship",
    description: "We match you with mentors based on your needs, interests, and background."
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Confidential Support",
    description: "All mentorship sessions are private and confidential, creating a safe space."
  },
  {
    icon: <Calendar className="h-6 w-6 text-primary" />,
    title: "Flexible Scheduling",
    description: "Schedule sessions at times that work for you, including evenings and weekends."
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
    title: "Multiple Communication Options",
    description: "Connect via chat, video calls, or voice calls based on your comfort level."
  }
];

const Mentorship = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 md:px-12 bg-gradient-to-br from-white via-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center gap-2 pill-primary">
                  <span>Mentorship Program</span>
                </div>
                
                <h1 className="heading-xl">
                  Guidance from
                  <span className="bg-gradient-to-r from-primary to-amasimbi-400 bg-clip-text text-transparent"> Caring Mentors</span>
                </h1>
                
                <p className="paragraph-lg text-gray-600 max-w-xl">
                  Connect with experienced mentors who can provide personalized guidance on reproductive health, adolescence challenges, and more.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link to="/register">
                    <Button size="lg" className="btn-primary rounded-full">
                      Find a Mentor <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/mentorship/how-it-works">
                    <Button variant="outline" size="lg" className="btn-outline rounded-full">
                      How It Works
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative animate-fade-in-up">
                <div className="relative z-10 aspect-square max-w-md mx-auto">
                  <div className="absolute top-5 left-5 w-64 h-64 rounded-full bg-primary/10 animate-float"></div>
                  <div className="absolute bottom-5 right-5 w-48 h-48 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: '1s' }}></div>
                  
                  <div className="relative z-20 glass-card rounded-3xl p-8 max-w-md mx-auto transform rotate-2 animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-400 flex items-center justify-center text-white font-bold">
                        M
                      </div>
                      <div>
                        <h3 className="font-medium">Mentorship Program</h3>
                        <p className="text-sm text-gray-500">Confidential & Supportive</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                          SJ
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Dr. Sarah Johnson</h4>
                          <p className="text-xs text-gray-500">Gynecologist</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-medium">
                          MN
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Maria Nzomo</h4>
                          <p className="text-xs text-gray-500">Reproductive Health Educator</p>
                        </div>
                      </div>
                      
                      <div className="bg-primary/5 rounded-xl p-3 border-l-4 border-primary">
                        <p className="text-sm font-medium">Your mentorship sessions are private and confidential</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Program Features */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h2 className="heading-lg mb-6">How Our Mentorship Program Works</h2>
              <p className="paragraph text-gray-600">
                Our structured mentorship program provides personalized support to help young women navigate adolescence and reproductive health challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animated-grid">
              {programFeatures.map((feature, index) => (
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
        
        {/* Meet the Mentors */}
        <section className="py-16 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 pill-primary mb-4">
                <span>Our Team</span>
              </div>
              <h2 className="heading-lg mb-6">Meet Our Mentors</h2>
              <p className="paragraph text-gray-600">
                Our mentors are experienced professionals committed to supporting young women through their adolescent journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mentors.map((mentor, index) => (
                <div 
                  key={index} 
                  className="premium-card p-6 animate-fade-in-up card-hover"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-full ${mentor.bgColor} flex items-center justify-center text-white font-bold text-xl`}>
                      {mentor.image}
                    </div>
                    <div>
                      <h3 className="heading-sm">{mentor.name}</h3>
                      <p className="text-sm text-gray-600">{mentor.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{mentor.bio}</p>
                  <Link to={`/mentors/${mentor.name.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-primary font-medium hover:underline">
                    View Full Profile <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/mentors">
                <Button variant="outline" className="btn-outline">
                  View All Mentors
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* How to Join */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="premium-card overflow-hidden relative p-8 md:p-12 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 animate-spin-slow"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                <div className="animate-fade-in">
                  <h2 className="heading-lg mb-6">How to Join Our Mentorship Program</h2>
                  <p className="paragraph text-gray-600 mb-6">
                    Getting started with our mentorship program is simple. Follow these steps to connect with a mentor who can support you on your journey.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-medium text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Create an account</h4>
                        <p className="text-sm text-gray-600">Sign up for AMASIMBI to access all our features.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-medium text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Complete your profile</h4>
                        <p className="text-sm text-gray-600">Tell us about yourself so we can match you with the right mentor.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-medium text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Browse and select mentors</h4>
                        <p className="text-sm text-gray-600">View mentor profiles and choose who you'd like to connect with.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-medium text-sm">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Schedule your first session</h4>
                        <p className="text-sm text-gray-600">Book a time that works for you and start your mentorship journey.</p>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/register">
                    <Button size="lg" className="btn-primary">
                      Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                
                <div className="relative animate-fade-in-up">
                  <div className="glass-card rounded-2xl p-6 transform rotate-2">
                    <h3 className="heading-sm mb-4 text-primary">Why Join Our Mentorship Program?</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4">
                        <h4 className="font-medium mb-1">Personalized Guidance</h4>
                        <p className="text-sm text-gray-600">
                          Get advice tailored to your specific questions and challenges.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4">
                        <h4 className="font-medium mb-1">Safe Space to Learn</h4>
                        <p className="text-sm text-gray-600">
                          Ask questions you might be uncomfortable asking elsewhere.
                        </p>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4">
                        <h4 className="font-medium mb-1">Build Confidence</h4>
                        <p className="text-sm text-gray-600">
                          Develop the confidence to make informed decisions about your health.
                        </p>
                      </div>
                      
                      <div className="bg-primary/5 rounded-xl p-4 border-l-4 border-primary">
                        <p className="text-sm font-medium">
                          "My mentor helped me understand so much about my changing body. I feel much more confident now." — Aisha, 15
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Mentorship;
