
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-bold text-primary"
          aria-label="AMASIMBI Home"
        >
          <div className="relative w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold text-xl">A</span>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-pulse-gentle"></span>
          </div>
          <span className="hidden sm:inline">AMASIMBI</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={cn("nav-link", isActive('/') && "nav-link-active")}>
            Home
          </Link>
          <Link to="/education" className={cn("nav-link", isActive('/education') && "nav-link-active")}>
            Education
          </Link>
          <Link to="/parents" className={cn("nav-link", isActive('/parents') && "nav-link-active")}>
            Parents
          </Link>
          <Link to="/mentorship" className={cn("nav-link", isActive('/mentorship') && "nav-link-active")}>
            Mentorship
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" size="sm" className="rounded-full">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90">
              Register
            </Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-full hover:bg-gray-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-white z-40 animate-fade-in-up">
          <nav className="flex flex-col gap-4 p-6">
            <Link 
              to="/" 
              className={cn(
                "p-3 rounded-lg hover:bg-gray-100 transition-colors text-lg", 
                isActive('/') && "bg-primary/10 text-primary font-medium"
              )}
            >
              Home
            </Link>
            <Link 
              to="/education" 
              className={cn(
                "p-3 rounded-lg hover:bg-gray-100 transition-colors text-lg", 
                isActive('/education') && "bg-primary/10 text-primary font-medium"
              )}
            >
              Education
            </Link>
            <Link 
              to="/parents" 
              className={cn(
                "p-3 rounded-lg hover:bg-gray-100 transition-colors text-lg", 
                isActive('/parents') && "bg-primary/10 text-primary font-medium"
              )}
            >
              Parents
            </Link>
            <Link 
              to="/mentorship" 
              className={cn(
                "p-3 rounded-lg hover:bg-gray-100 transition-colors text-lg", 
                isActive('/mentorship') && "bg-primary/10 text-primary font-medium"
              )}
            >
              Mentorship
            </Link>
            
            <div className="flex flex-col gap-3 mt-4">
              <Link to="/login">
                <Button variant="outline" className="w-full justify-center rounded-full py-6">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="w-full justify-center rounded-full py-6 bg-primary hover:bg-primary/90">
                  Register
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
