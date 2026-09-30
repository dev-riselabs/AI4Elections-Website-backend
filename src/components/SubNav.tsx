import React from 'react';

const SubNav: React.FC = () => {
  const links = [
    { label: 'Technical Details', href: '#technical-details' },
    { label: 'Concept Document', href: '#concept-document' },
    { label: 'FAQ', href: '#faq' },
    { label: 'AI4Elections Hackathon 2026', href: '#hackathon' },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-sm overflow-x-auto">
      <div className="flex justify-center gap-8 md:gap-16 py-3 text-white text-sm font-semibold tracking-wide px-4 whitespace-nowrap min-w-max mx-auto">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:text-orange-200 transition-colors duration-200 cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SubNav;
