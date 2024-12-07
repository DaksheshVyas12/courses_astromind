import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Filter } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Introduction to Astronomy",
    instructor: "Dr. Elena Rodriguez",
    price: 49.99,
    free: false,
    difficulty: "Beginner",
    rating: 4.7,
    lectures: 24,
    category: "Beginner",
    cover: "/api/placeholder/400/250"
  },
  // More courses...
];

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === 'All' || course.category === filter)
  );

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
        <input 
          type="text" 
          placeholder="Search Space Courses..." 
          className="w-full p-3 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-auto p-3 rounded-lg border border-purple-300"
        >
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img 
              src={course.cover} 
              alt={course.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{course.title}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 truncate">
                  {course.instructor}
                </span>
                <span className={`
                  px-2 py-1 rounded text-xs 
                  ${course.free ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}
                `}>
                  {course.free ? 'FREE' : `$${course.price}`}
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-600">
                <span><Star size={14} className="inline mr-1" />{course.rating}</span>
                <span>{course.lectures} Lectures</span>
                <span>{course.difficulty}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Courses;