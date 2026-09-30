import { useState } from "react";


const topics = [
  {
    id: 1,
    title: "AI & Electoral Information Integrity",
    description:
      "Develop responsible solutions for detecting, assessing and responding to AI-generated or manipulated electoral information, synthetic media, impersonation and misleading content.",
  },
  {
    id: 2,
    title: "Electoral Data Intelligence",
    description:
      "Develop responsible solutions for improving the collection, analysis and use of electoral data.",
  },
  {
    id: 3,
    title: "Inclusive & Multilingual Civic Technology",
    description:
      "Develop inclusive and multilingual technologies that improve civic participation and access to electoral information.",
  },
  {
    id: 4,
    title: "Electoral Cybersecurity & Resilience",
    description:
      "Develop solutions that strengthen electoral systems against cybersecurity threats and improve resilience.",
  },
  {
    id: 5,
    title: "Election Observation & Citizen Accountability",
    description:
      "Develop technologies that support election observation, citizen participation and accountability.",
  },
  {
    id: 6,
    title: "Electoral Technology",
    description:
      "Develop innovative technologies that improve electoral processes and strengthen democratic participation.",
  },
];

function ChallengeArea() {
    const [activeTopic, setActiveTopic] = useState(0);
  return (
   <section
      className="bg-center bg-cover bg-no-repeat px-4 md:px-25 py-10 flex flex-col gap-6 md:gap-10 "
      style={{ backgroundImage: "url('/challenge_area_bg.png')" }}
    >
        <div className="flex flex-col gap-4 md:gap-6 items-center ">
        <h2 className="text-4xl md:text-heading-2 font-bold text-heading-text tracking-tight uppercase">
         CHALLENGE AREAS
        </h2>
        <p className="text-heading-text text-sm md:text-lg font-medium text-center max-w-[70ch]">
          Explore the possibilities
        </p>
        <p className="text-base md:text-xl text-heading-text">Participants may explore challenges across different parts of the electoral and democratic participation ecosystem. The following areas provide a starting point for ideas and exploration.</p>
      </div>

       <section className="w-full  grid grid-cols-1 gap-4 md:grid-cols-[1.35fr_1fr]">
      
        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/challenge_area_img.png"
            alt="AI robot"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Topics */}
        <div className="flex flex-col gap-3 justify-center">
          {topics.map((topic, index) => {
            if (index === activeTopic) return <div key={topic.title} className="min-h-57.5 rounded-2xl bg-linear-to-b from-purple-600 to-blue-600 p-6 text-white">
            <div className="flex items-start gap-4">
              {/* Circle */}
              <div className="mt-1 h-5 w-5 shrink-0 rounded-full border-2 border-white" />
              <div className="flex flex-col gap-3">
                <h2 className="font-robotoMono text-xl leading-tight md:text-2xl">
                  {topic.title}
                </h2>

                <p className="mt-5 font-robotoMono text-sm leading-relaxed">
                  {topic.description}
                </p>
              </div>

              
            </div>
          </div>;

            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => setActiveTopic(index)}
                className="w-full rounded-2xl bg-white/10 backdrop-blur-xs backdrop-brightness-95 px-6 py-5 text-left font-robotoMono text-sm leading-relaxed shadow-sm transition hover:bg-scale-101"
              >
                {topic.title}
              </button>
            );
          })}
        </div>
    </section>
    </section>
  )
}

export default ChallengeArea