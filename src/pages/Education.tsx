
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Book, BookOpen, Heart, Search, Filter, ChevronDown } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const ageRanges = ['12-14', '15-17', '18-21', '22-25', 'Parents'];
const categories = ['Reproductive Health', 'Menstrual Health', 'Contraceptives', 'Safe Relationships', 'Body Changes'];

const resources = [
  {
    id: 1,
    title: 'Understanding Your Menstrual Cycle',
    description: 'A comprehensive guide to understanding your period, cycle changes, and what\'s normal.',
    category: 'Menstrual Health',
    ageRange: '12-14',
    icon: <Heart className="h-5 w-5" />,
    color: 'bg-rose-100 text-rose-600'
  },
  {
    id: 2,
    title: 'Contraceptive Methods Explained',
    description: 'Learn about different contraceptive options, how they work, and their effectiveness.',
    category: 'Contraceptives',
    ageRange: '18-21',
    icon: <Book className="h-5 w-5" />,
    color: 'bg-primary/10 text-primary'
  },
  {
    id: 3,
    title: 'Body Changes During Puberty',
    description: 'What to expect as your body develops and changes during adolescence.',
    category: 'Body Changes',
    ageRange: '12-14',
    icon: <Heart className="h-5 w-5" />,
    color: 'bg-secondary/10 text-secondary'
  },
  {
    id: 4,
    title: 'Having Conversations About Sex',
    description: 'Guide for parents on how to discuss reproductive health with your children.',
    category: 'Safe Relationships',
    ageRange: 'Parents',
    icon: <BookOpen className="h-5 w-5" />,
    color: 'bg-amasimbi-600/10 text-amasimbi-600'
  },
  {
    id: 5,
    title: 'Understanding Consent and Boundaries',
    description: 'Important information about consent, setting boundaries, and healthy relationships.',
    category: 'Safe Relationships',
    ageRange: '15-17',
    icon: <Heart className="h-5 w-5" />,
    color: 'bg-rose-100 text-rose-600'
  },
  {
    id: 6,
    title: 'Reproductive Health Basics',
    description: 'Essential information about reproductive organs and their functions.',
    category: 'Reproductive Health',
    ageRange: '12-14',
    icon: <Book className="h-5 w-5" />,
    color: 'bg-primary/10 text-primary'
  },
];

const Education = () => {
  const [selectedAgeRange, setSelectedAgeRange] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredResources = resources.filter(resource => {
    const matchesAgeRange = !selectedAgeRange || resource.ageRange === selectedAgeRange;
    const matchesCategory = !selectedCategory || resource.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesAgeRange && matchesCategory && matchesSearch;
  });
  
  const clearFilters = () => {
    setSelectedAgeRange(null);
    setSelectedCategory(null);
    setSearchQuery('');
  };
  
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 pb-16">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 pill-primary mb-4 animate-fade-in">
              <span>Educational Resources</span>
            </div>
            <h1 className="heading-xl mb-6 animate-fade-in">
              Evidence-Based Reproductive Health Education
            </h1>
            <p className="paragraph-lg text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in">
              Access age-appropriate content on reproductive health, carefully curated by healthcare professionals.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto relative animate-fade-in">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>
              
              <button 
                className="md:absolute right-4 top-1/2 md:transform md:-translate-y-1/2 flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary mt-4 md:mt-0"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                Filters
                <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {/* Filters */}
            <div className={cn(
              "max-w-4xl mx-auto mt-6 transition-all duration-300 overflow-hidden",
              showFilters ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}>
              <div className="bg-white rounded-2xl p-6 shadow-sm animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-3">Age Range</h3>
                    <div className="flex flex-wrap gap-2">
                      {ageRanges.map((range) => (
                        <button
                          key={range}
                          className={cn(
                            "px-3 py-1 rounded-full text-sm transition-colors",
                            selectedAgeRange === range 
                              ? "bg-primary text-white" 
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          )}
                          onClick={() => setSelectedAgeRange(selectedAgeRange === range ? null : range)}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          className={cn(
                            "px-3 py-1 rounded-full text-sm transition-colors",
                            selectedCategory === category 
                              ? "bg-primary text-white" 
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          )}
                          onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                {(selectedAgeRange || selectedCategory) && (
                  <div className="mt-4 flex justify-end">
                    <button
                      className="text-sm text-primary hover:underline"
                      onClick={clearFilters}
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.length > 0 ? (
                filteredResources.map((resource, index) => (
                  <div 
                    key={resource.id} 
                    className="premium-card p-6 card-hover animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full ${resource.color} flex items-center justify-center`}>
                        {resource.icon}
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="pill-primary">{resource.ageRange}</span>
                          <span className="pill bg-gray-100 text-gray-700">{resource.category}</span>
                        </div>
                        <h3 className="heading-sm mb-2">{resource.title}</h3>
                        <p className="text-gray-600 mb-4">{resource.description}</p>
                        <Link to={`/education/${resource.id}`}>
                          <Button variant="link" className="text-primary p-0 h-auto font-medium">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <Search className="h-6 w-6 text-gray-400" />
                  </div>
                  <h3 className="heading-sm mb-2">No resources found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Education;
