import { FaArrowRight } from "react-icons/fa";
export default function Hero() {
  return (
    <section className="w-full h-260 bg-[url('/hero-bg.png')] bg-cover bg-no-repeat bg-center font-robotoMono p-6">
      {/* Top Bar (Navbar): Flex container with three distinct sections */}
      <header className="w-full py-2.5 px- ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Left: Dark blue background with white text */}
          <div className="flex items-center gap-2 px-10 py-1.5  text-white text-xs sm:text-base font-medium tracking-wide">
            {/* <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse inline-block" /> */}
            <span className="text-center">
              Application Deadline: <br />
              Thursday 29th October 2026 at 11:59pm WAT
            </span>
          </div>

          {/* Center: A white block containing the AI6 logo */}
          <div className="bg-white px-5 py-1.5 rounded shadow-sm flex items-center justify-center">
            <img
              src="/ai6-logo.png"
              alt="AI6"
              className="h-8 md:h-24 object-contain"
            />
          </div>

          {/* Right: An orange button */}
          <div>
            <button className="flex gap-8 text-center items-center bg-accent-text hover:bg-orange-600 transition-colors duration-200 text-white text-xs sm:text-sm font-semibold px-14 py-4 rounded shadow-sm hover:shadow cursor-pointer">
              Partner / Sponsor With Us <FaArrowRight />
            </button>
          </div>
        </div>
      </header>

      {/* Main Hero Section: Deep blue-to-purple gradient with dot/grid overlay */}
      {/* <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-indigo-950 text-white pt-12 md:pt-16 pb-0 overflow-hidden"> */}
      <div className="relative max-w-7xl mx-auto text-white pt-12 md:pt-16 pb-8 overflow-hidden">
        {/* Dot / Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="col-span-7 pl-8 md:py-16 space-y-8">
              <h1 className="text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                <span className="bg-linear-to-b from-brand-blue to-brand-purple bg-clip-text text-transparent">
                  #AI4ELECTIONS
                </span>{" "}
                <br /> HACKATHON 2026
              </h1>

              <p className="text-md text-white leading-[1.8] max-w-xl">
                The #AI4Elections Hackathon is a national, multidisciplinary,
                nonpartisan electoral innovation project created by Rise
                Networks to mobilise and connect Nigeria's technology ecosystem,
                electoral experts, academic institutions, young innovators,
                researchers, developers and civil society to develop usable,
                practical, safe and responsible artificial intelligence and
                emerging technologies tools, solutions, platforms and
                applications for electoral processes, integrity, transparency,
                inclusion and democratic participation in Nigeria.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button className= "flex gap-6 text-center items-center bg-orange-500 hover:bg-orange-600 transition-all duration-200 text-white px-6 py-3 rounded font-semibold shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 cursor-pointer">
                  APPLY NOW ! <FaArrowRight />
                </button>
                <button className="flex gap-8 text-center items-center bg-transparent hover:bg-white/10 transition-all duration-200 border border-white text-white px-6 py-3 rounded font-semibold hover:-translate-y-0.5 cursor-pointer">
                  Join AI4Elections Dev Hub  <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Right Column: Cutout image aligned to bottom */}
            <div className="col-span-5 ">
              <img
                src="/hero-img.png"
                alt="Hero People"
                className="w-full max-w-md md:max-w-none object-contain align-center drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
