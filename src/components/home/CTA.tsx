
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="premium-card overflow-hidden relative p-12 md:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 animate-spin-slow"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-secondary/5 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:max-w-xl animate-fade-in">
              <h2 className="heading-lg mb-6 text-center lg:text-left">
                Ready to Join the AMASIMBI Community?
              </h2>
              <p className="paragraph text-gray-600 mb-8 text-center lg:text-left">
                Create your free account today to access educational resources, connect with mentors, and be part of a supportive community for reproductive health.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/register">
                  <Button size="lg" className="btn-primary">
                    Create Your Account <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/education">
                  <Button variant="outline" size="lg" className="btn-outline">
                    Explore Resources
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 animate-fade-in-up">
              <div className="flex items-start gap-4 glass-card p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Privacy Guaranteed</h3>
                  <p className="text-sm text-gray-600">
                    Your data is encrypted and secure. We prioritize your privacy.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 glass-card p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex-shrink-0 flex items-center justify-center">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Community Support</h3>
                  <p className="text-sm text-gray-600">
                    Join 8,000+ young women and parents already benefiting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
