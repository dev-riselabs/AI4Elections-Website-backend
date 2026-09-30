import { useState } from 'react';
import Hero from '../components/Hero';
import Sponsors from '../components/Sponsors';
import SubNav from '../components/SubNav';
import TechnicalDetails from '../components/TechnicalDetails/TechnicalDetails';
import Footer from '../components/Footer';

const subNavTabs = [
  { id: 'technical-details', label: 'Technical Briefs' },
  { id: 'concept-document', label: 'Concept Document' },
  { id: 'faq', label: 'FAQ' },
  { id: 'hackathon', label: '#AI4Elections Hackathon 2026' },
] as const;

type SubNavTabId = (typeof subNavTabs)[number]['id'];

function Homepage() {
  const [activeTab, setActiveTab] = useState<SubNavTabId>('technical-details');
  const selectedTab = subNavTabs.find((tab) => tab.id === activeTab);

  return (
   <div className="w-full min-h-screen bg-white text-gray-900 selection:bg-orange-500 selection:text-white">
      {/* 1. Navigation and Hero Section */}
      <Hero />

      {/* 2. Sponsors Component */}
      <Sponsors />

      {/* 3. Sub-navigation Banner */}
      <SubNav tabs={subNavTabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <div id="subnav-panel" role="tabpanel" aria-labelledby={`${activeTab}-tab`}>
        {activeTab === 'technical-details' ? (
          <>
            {/* 4. About & Details Section */}
            <TechnicalDetails />

          </>
        ) : (
          <section className="flex min-h-90 items-center justify-center px-6 py-20 text-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-600">
                Coming soon
              </p>
              <h1 className="text-3xl font-bold text-gray-900">{selectedTab?.label}</h1>
              <p className="mt-3 text-gray-600">This section is being prepared.</p>
            </div>
          </section>
        )}
      </div>

      {/* 7. Dark Footer */}
      <Footer />
    </div>
  )
}

export default Homepage