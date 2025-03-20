import React, { useEffect } from "react";

const items = [
  "Accommodation", "Meals", "Sightseeing", "Guided Tour (professional)", "Tour Manager",
  "Insurance", "Healthy Snacks & Meals", "Videography & Photography", "Online Tracking",
  "Storytelling Sessions", "Return Gifts", "Music Nights (Live Cultural Music)",
  "Career Counselor", "Tour Guide", "Doctor on Call", "Security Guard"
];

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-6 sm:px-12 lg:px-20 py-16 text-gray-700">
      {/* About Us Section */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
        My Campus Safari
      </h2>
      <p className="mt-4 leading-relaxed">
      we believe that education extends
          far beyond the classroom.
          Our thoughtfully curated educational tours
          combine cultural immersion, experiential
          learning, and meaningful adventure
          creating enriching journeys that leave a
          lasting impact.From iconic historical sites to
          awe-inspiring natural landscapes, each trip
          is designed to spark curiosity, foster
          personal growth, and deepen students,
          understanding of the world around them.
          With a commitment to safety, expert
          facilitation, and engaging experiences,
          we turn every journey into a powerful
          educational opportunity, Connect,
          Collaborate. Grow.Join a vibrant community
          of future changemakers discover lifelong
          friendships, build valuable networks, and
          explore the world alongside like-minded
          peers who share your passion for learning
          and impact.
      </p>

      {/* Vision Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-orange-600">Vision</h3>
        <p className="mt-2 leading-relaxed">To revolutionize student travel by making learning an unforgettable adventure. We envision a future where every journey expands young minds, fosters curiosity, and nurtures a deeper connection with the world.</p>
      </div>

      {/* Mission Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-orange-600">Mission</h3>
        <p className="mt-2 leading-relaxed">
          At My Campus Safari, our mission is to transform traditional learning into immersive experiences.
          Through carefully curated trips, we blend education with adventure, ensuring students gain real-world insights,
          cultural awareness, and lifelong memories. We are committed to providing safe, engaging, and meaningful
          travel experiences that inspire students beyond the classroom.
        </p>
      </div>

      {/* Our Approach Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-orange-600">Our Approach</h3>
        <p className="mt-2 leading-relaxed">
          We believe that learning is best experienced, not just studied. Our trips are meticulously designed to be interactive,
          educational, and fun. From historical explorations to outdoor challenges, we create hands-on learning opportunities
          that spark curiosity and encourage critical thinking. With a focus on safety, expert guidance, and seamless execution,
          we ensure every journey is enriching for students, stress-free for educators, and reassuring for parents.
        </p>
      </div>

      {/* What Sets Us Apart */}
      <div className="mt-12">
        <h3 className="text-2xl sm:text-3xl text-orange-600">
          Why Choose Us ?
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
      <div className="mt-12">
        <h3 className="text-2xl sm:text-3xl text-orange-600">
          Where can we take you ?
        </h3>
        <p className="mt-2 leading-relaxed">
          Explore Over 50+ Destinations Across India!
          From the majestic forts of Rajasthan to the serene backwaters of Kerala, we
          take students on immersive journeys to India's most iconic destinations.
          Customize Your Experience !
          Choose from our wide range of educational tours designed to match your
          curriculum and interests.
        </p>
      </div>

      {/* Program Offerings */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-orange-600">Program Offerings</h3>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          <li>School & High School Programs</li>
          <li>International Baccalaureate</li>
          <li>MYP & DP Core Focused Programs</li>
          <li>CAS Trips</li>
          <li>High-Impact Subject-Based Trips</li>
          <li>University UG & PG Programs</li>
          <li>Architecture and Design Tours</li>
          <li>Industry Interactive Programs</li>
        </ul>
      </div>

      {/* CSS for Animations */}
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
