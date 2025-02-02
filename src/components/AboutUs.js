import React from "react";

const AboutUs = () => {
  return (
    <div className="px-6 sm:px-10 lg:px-20 py-10">
      {/* About Us Section */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">About Us</h2>
        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At <span className="font-semibold">My Campus Safari</span>, we believe that the best learning happens through experience. We turn every trip into an adventure for the mind and spirit. Our tours are designed to spark curiosity and provide students with rich cultural experiences. From historical sites to outdoor activities, we focus on fun, personal growth and hands on learning. With safety and expert guides at the core, we aim to help students explore, learn, and create lasting memories. For teachers and parents, it’s the best way to inspire students beyond the classroom walls.
        </p>
      </div>

      {/* What Sets Us Apart */}
      <div className="mt-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          What sets us apart from a regular travel agency?
        </h3>
        <p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
          Accommodation, Meals, Sightseeing, Guided Tour (professional), Tour Manager, Insurance, Healthy Snacks & Meals, 
          Videography & Photography, Online Tracking, Storytelling Sessions, Return Gifts, Music Nights (Live Cultural Music), 
          Career Counselor, Tour Guide, Doctor on Call, Tour Manager, Security Guard.
        </p>
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
    </div>
  );
};

export default AboutUs;
