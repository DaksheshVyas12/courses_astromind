import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Book, Users } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto text-center py-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Explore the Universe from Home
        </h1>
        <p className="text-base md:text-xl mb-12 max-w-2xl mx-auto">
          Learn astronomy, space science, and cosmic mysteries with AstroMinds - 
          Your gateway to understanding the universe.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Rocket size={48} className="mx-auto mb-4" />,
              title: "Space Courses",
              link: "/courses",
              bgClass: "bg-blue-500 hover:bg-blue-600"
            },
            {
              icon: <Book size={48} className="mx-auto mb-4" />,
              title: "Learn Astronomy",
              link: "/about",
              bgClass: "bg-green-500 hover:bg-green-600"
            },
            {
              icon: <Users size={48} className="mx-auto mb-4" />,
              title: "Meet Experts",
              link: "/instructors",
              bgClass: "bg-purple-500 hover:bg-purple-600"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white/10 p-6 rounded-xl transform transition-all hover:scale-105"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <Link 
                to={item.link} 
                className={`
                  px-6 py-2 rounded-full text-white transition-colors
                  ${item.bgClass}
                `}
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
