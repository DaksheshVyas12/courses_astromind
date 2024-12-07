import React from 'react';
import { Rocket, Globe, Target } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">About AstroMinds</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto px-4">
            Revolutionizing space education by bringing the universe closer to learners worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white/10 p-4 sm:p-6 rounded-xl text-center">
            <Rocket className="mx-auto mb-4" size={48} />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-sm sm:text-base">Democratize space education and inspire the next generation of cosmic explorers.</p>
          </div>
          
          <div className="bg-white/10 p-4 sm:p-6 rounded-xl text-center">
            <Globe className="mx-auto mb-4" size={48} />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Global Reach</h3>
            <p className="text-sm sm:text-base">Connecting passionate learners with world-class astronomers and space experts.</p>
          </div>
          
          <div className="bg-white/10 p-4 sm:p-6 rounded-xl text-center">
            <Target className="mx-auto mb-4" size={48} />
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-sm sm:text-base">Creating a comprehensive platform for space learning across all knowledge levels.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
