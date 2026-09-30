import React from 'react';

const CTACyan: React.FC = () => {
  return (
    <section className="w-full bg-cyan-50 text-gray-900 overflow-hidden pt-8 md:pt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side: Align items center */}
          <div className="flex flex-col justify-center items-start py-8 md:py-16 space-y-5">
            <h2 className="text-gray-900 text-3xl font-bold uppercase tracking-wide leading-tight">
              STAY BEYOND THE HACKATHON.
            </h2>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-lg">
              Winning isn't the finish line—it's the catalyst. Join the continuous AI4Elections developer ecosystem, receive incubation opportunities, connect with election observers, and deploy your tools for real impact.
            </p>

            <div className="pt-2">
              <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-200 text-white px-8 py-3 rounded-md font-semibold shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 cursor-pointer">
                Join AI4Elections Dev Hub -&gt;
              </button>
            </div>
          </div>

          {/* Right Side: Cutout of four people */}
          <div className="flex justify-center md:justify-end items-end self-end pt-4">
            <img 
              src="/cta-2-people.png" 
              alt="Four young innovators" 
              className="w-full max-w-md md:max-w-lg object-contain self-end drop-shadow-xl" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTACyan;
