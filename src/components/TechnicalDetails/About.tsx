import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Image: Edge-to-edge within container rectangular image of a team meeting */}
        <div className="w-full overflow-hidden rounded-xl shadow-md mb-12">
          <img 
            src="/about-meeting.jpg" 
            alt="Team Meeting Collaboration" 
            className="w-full rounded-xl shadow-md object-cover max-h-[460px] hover:scale-[1.01] transition-transform duration-500" 
          />
        </div>

        {/* Bottom Two-Column Layout */}
        <div className="grid md:grid-cols-3 gap-12 items-stretch">
          
          {/* Left Side (col-span-2) */}
          <div className="md:col-span-2 space-y-6 text-gray-700 leading-loose">
            <p className="font-semibold text-gray-900 text-base md:text-lg">
              The AI4Elections Hackathon 2026 is an ambitious, nationwide initiative designed to foster groundbreaking technological solutions that reinforce electoral transparency, combat disinformation, and ensure democratic resilience across Africa.
            </p>

            <p>
              <strong className="text-orange-500 font-bold">Led by Rise Networks</strong>, Nigeria's foremost enterprise for technology-driven youth empowerment, data science, and artificial intelligence, this initiative brings together the continent's brightest engineers, civic experts, and data professionals. Together, teams build scalable, real-world tools that empower election management bodies, domestic observers, and citizens alike.
            </p>

            <p>
              Participants will navigate through intensive problem ideation, high-impact mentorship from global AI researchers, and rigorous architectural paper designs. Finalist innovations will be prepared for incubation, real-world pilot deployments, and integration with civic ecosystems to elevate voter trust in democratic governance.
            </p>
          </div>

          {/* Right Side (col-span-1) - Tall, prominent card */}
          <div className="md:col-span-1 flex">
            <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-2xl p-8 flex items-center justify-center min-h-[300px] text-center transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-orange-500 font-bold text-xl md:text-2xl uppercase tracking-wider leading-snug">
                AI4ELECTIONS<br />HACKATHON<br />PAPER DESIGN
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
