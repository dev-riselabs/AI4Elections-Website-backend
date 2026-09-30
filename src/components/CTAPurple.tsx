import React from 'react';

const CTAPurple: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white overflow-hidden pt-8 md:pt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side: Cutout image of three people */}
          <div className="flex justify-center md:justify-start items-end self-end order-2 md:order-1 pt-4">
            <img 
              src="/cta-1-people.png" 
              alt="Three young innovators" 
              className="w-full max-w-md md:max-w-lg object-contain self-end drop-shadow-xl" 
            />
          </div>

          {/* Right Side: Align items center */}
          <div className="flex flex-col justify-center items-start py-8 md:py-16 space-y-5 order-1 md:order-2">
            <h2 className="text-white text-3xl font-bold uppercase tracking-wide leading-tight">
              DON'T DEVELOP AI FOR THE SAKE OF AI
            </h2>

            <p className="text-white/95 text-sm md:text-base leading-relaxed max-w-lg">
              We challenge you to engineer practical, human-centered artificial intelligence solutions that address genuine electoral vulnerabilities, elevate voter agency, and withstand scrutiny in real-world democratic contexts.
            </p>

            <div className="pt-2">
              <button className="bg-green-500 hover:bg-green-600 transition-all duration-200 text-white px-8 py-3 rounded-md font-semibold shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 cursor-pointer">
                Start your Application -&gt;
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTAPurple;
