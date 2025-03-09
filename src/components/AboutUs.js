import React from "react";

const items = [
  "Accommodation", "Meals", "Sightseeing", "Guided Tour (professional)", "Tour Manager",
  "Insurance", "Healthy Snacks & Meals", "Videography & Photography", "Online Tracking",
  "Storytelling Sessions", "Return Gifts", "Music Nights (Live Cultural Music)",
  "Career Counselor", "Tour Guide", "Doctor on Call", "Security Guard"
];

const AboutUs = () => {
  return (
    <div className="px-6 sm:px-10 lg:px-20 py-10">
      {/* About Us Section */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">About Us</h2>
        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold">My Campus Safari</span>, we believe that the best learning happens through experience. 
          We turn every trip into an adventure for the mind and spirit. Our tours are designed to spark curiosity and provide students 
          with rich cultural experiences. From historical sites to outdoor activities, we focus on fun, personal growth, and hands-on learning. 
          With safety and expert guides at the core, we aim to help students explore, learn, and create lasting memories. For teachers and parents, 
          it’s the best way to inspire students beyond the classroom walls.
        </p>
      </div>

      {/* What Sets Us Apart */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
          What sets us apart from a regular travel agency?
        </h3>
        <div className="relative overflow-hidden w-full mt-6">
          <div className="flex space-x-6 animate-scroll-left whitespace-nowrap">
            {items.map((item, index) => (
              <div key={index} className="px-4 py-2 text-primarycolor rounded-full text-lg font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden w-full mt-4">
          <div className="flex space-x-6 animate-scroll-right whitespace-nowrap">
            {items.reverse().map((item, index) => (
              <div key={index} className="px-4 py-2 text-primarycolor rounded-full text-lg font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Where can we take you? / Where are you headed?
        </h3>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li>✅ Choose from 50+ destinations across India</li>
          <li>✅ India map created with a trail marking major destinations.</li>
          <li>✅ Try to add a few pictures for a few destinations.</li>
        </ul>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        
        @keyframes scroll-right {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
