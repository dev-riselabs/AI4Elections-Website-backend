import React from "react";

const About: React.FC = () => {
  return (
    <section className="w-full h-full md:h-335 xl:h-500 py-10 md:p-10 bg-[url('../technical_brief_bg.png')] bg-no-repeat bg-cover bg-right md:bg-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Image: Edge-to-edge within container rectangular image of a team meeting */}
        <div className="w-full overflow-hidden rounded-xl shadow-md mb-8">
          <img
            src="/about-meeting.jpg"
            alt="Team Meeting Collaboration"
            className="w-full rounded-xl shadow-md object-cover max-h-[700px] hover:scale-[1.01] transition-transform duration-500"
          />
        </div>

        {/* Bottom 12-Column Layout */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Left Side (col-span-2) */}
          <div className="md:col-span-12 space-y-6 text-gray-700 leading-loose font-robotoMono text-justify text-sm md:text-sm xl:text-xl">
            <p className="">
              Elections are increasingly shaped by digital technologies,
              artificial intelligence and the way information is created, shared
              and accessed. At the same time, new technologies present
              opportunities to strengthen electoral information, improve access
              to civic participation, support election observation and develop
              more resilient systems. #AI4Elections brings together Nigeria's
              technology, research, academic, civic and electoral communities to
              explore how responsible AI and digital innovation can contribute
              to more transparent, inclusive and accountable elections.
            </p>
          </div>
          <div className="md:col-span-7 space-y-6 text-gray-700 leading-loose font-robotoMono text-justify text-sm md:text-sm xl:text-xl">
            <p>
              Led by{" "}
              <strong className="text-orange-500 font-bold">
                Rise Networks{" "}
              </strong>
              , #AI4Elections is a national, multidisciplinary and nonpartisan
              initiative focused on developing practical technology solutions to
              real electoral challenges. The initiative brings together
              developers, AI and data professionals, researchers, students,
              designers, electoral experts, civic organisations, policy
              professionals and other innovators to develop, test and explore
              responsible approaches to electoral technology.
            </p>
            {/* Right Side (col-span-1) - Tall, prominent card */}
          </div>
            <div className="md:col-span-5 flex">
              <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-2xl p-8 flex items-center justify-center min-h-[300px] text-center transform hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-orange-500 font-bold text-xl md:text-2xl uppercase tracking-wider leading-snug">
                  AI4ELECTIONS HACKATHON Fly DESIGN
                </h3>
              </div>
            </div>
          <div className="md:col-span-12 space-y-6 text-gray-700 leading-loose font-robotoMono text-justify text-sm md:text-sm xl:text-xl">
            <p>
              The initiative is built around three connected components: the
              #AI4Elections Hackathon, the #AI4Elections Innovation Lab, and the
              #AI4Elections Community of Practice. The Hackathon provides a
              platform for teams to develop innovative solutions across key
              electoral challenge areas. Selected projects may progress into the
              Innovation Lab for further technical development, validation and
              mentorship, while the Community of Practice provides an ongoing
              network for research, collaboration, learning and knowledge
              exchange.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
