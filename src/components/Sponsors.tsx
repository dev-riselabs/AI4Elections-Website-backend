export default function Sponsors() {
  return (
    <section className="bg-white py-6 border-b border-gray-100">
      <div className="flex justify-center items-center gap-12 flex-wrap max-w-6xl mx-auto px-4">
        <img 
          src="/tda-logo.png" 
          alt="TDA Logo" 
          className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" 
        />
        <img 
          src="/rise-networks-logo.png" 
          alt="Rise Networks Logo" 
          className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" 
        />
        <img 
          src="/ncc-logo.png" 
          alt="NCC Logo" 
          className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" 
        />
        <img 
          src="/ai6-logo.png" 
          alt="AI6 Logo" 
          className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" 
        />
      </div>
    </section>
  );
}

