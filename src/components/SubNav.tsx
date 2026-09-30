import React from 'react';

interface SubNavProps<T extends string> {
  tabs: readonly { id: T; label: string }[];
  activeTab: T;
  onTabChange: (tab: T) => void;
}

const SubNav = <T extends string>({ tabs, activeTab, onTabChange }: SubNavProps<T>) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | undefined;

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;

    if (nextIndex !== undefined) {
      event.preventDefault();
      const tabButtons = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      tabButtons?.[nextIndex]?.focus();
      onTabChange(tabs[nextIndex].id);
    }
  };

  return (
   
    <nav className="w-full bg-linear-to-b from-brand-purple from-40% to-brand-blue shadow-sm  p-4 py-7 font-robotoMono md:px-25 overflow-x-auto">
      <div role="tablist" aria-label="Hackathon sections" className="flex justify-center gap-8 md:gap-16  text-sm font-semibold tracking-wide  whitespace-nowrap min-w-max mx-auto border-b border-white">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            id={`${tab.id}-tab`}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls="subnav-panel"
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => onTabChange(tab.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`border-b-4 py-4 transition-colors duration-200 cursor-pointer ${
              activeTab === tab.id
                ? 'border-orange-300 text-orange-200'
                : 'border-transparent text-white hover:text-orange-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SubNav;
