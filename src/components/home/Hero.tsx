
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 pill-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Empowering young women</span>
            </div>
            
            <h1 className="heading-xl">
              Confidential Guidance for 
              <span className="bg-gradient-to-r from-primary to-amasimbi-400 bg-clip-text text-transparent"> Reproductive Health</span>
            </h1>
            
            <p className="paragraph-lg text-gray-600 max-w-xl">
              Providing mentorship, education, and support for young women navigating adolescence,
              while helping parents approach conversations about reproductive health.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/register">
                <Button size="lg" className="btn-primary rounded-full">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/education">
                <Button variant="outline" size="lg" className="btn-outline rounded-full">
                  Explore Resources
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-4 pt-6 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-primary">+1k</div>
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-600">+5k</div>
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-xs font-medium text-pink-600">+2k</div>
              </div>
              <p>Joined by 8,000+ young women and parents</p>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up">
            <div className="relative z-10 aspect-square max-w-md mx-auto">
              <div className="absolute top-5 left-5 w-64 h-64 rounded-full bg-primary/10 animate-float"></div>
              <div className="absolute bottom-5 right-5 w-48 h-48 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-20 glass-card rounded-3xl p-8 max-w-md mx-auto transform rotate-2 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-400 flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <h3 className="font-medium">AMASIMBI Mentorship</h3>
                    <p className="text-sm text-gray-500">Safe & Confidential</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-sm">Reproductive health education designed specifically for your age group</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-sm">Mentorship from experienced professionals</p>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-3 border-l-4 border-primary">
                    <p className="text-sm font-medium">Your data is encrypted and secure</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl p-4 shadow-lg transform -rotate-3 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
                    <span className="text-xs">P</span>
                  </div>
                  <p className="text-sm font-medium">Resources for parents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-4 w-24 h-24 rounded-full bg-primary/5 animate-pulse-gentle"></div>
      <div className="absolute bottom-1/4 right-4 w-32 h-32 rounded-full bg-secondary/5 animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-purple-100 animate-float"></div>
    </section>
  );
};

export default Hero;
