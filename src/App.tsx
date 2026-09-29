import { useState } from 'react'
import { 
  Sparkles, 
  Layers, 
  Server, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Zap,
  Vote
} from 'lucide-react'

export default function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'stack' | 'api'>('overview')

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Top Banner */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Vote className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                AI4Elections
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                v1.0.0
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-slate-400 font-medium">Ready for Development</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Stack Initialized Successfully
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Empowering Democratic Insights with{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              AI4Elections
            </span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Your fullstack workspace is fully configured with React, TypeScript, Tailwind CSS v4, and Laravel backend.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                activeTab === 'overview'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                activeTab === 'stack'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Technology Stack
            </button>
            <button
              onClick={() => setActiveTab('api')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                activeTab === 'api'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Backend API Link
            </button>
          </div>
        </div>

        {/* Content Cards */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Vite + React 19</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Lightning-fast Hot Module Replacement (HMR) and optimized build pipeline for next-generation web applications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Tailwind CSS v4</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Zero-config modern CSS styling with direct Vite plugin integration for high performance and clean UI designs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-105 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Laravel Backend</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Robust RESTful API architecture with authentication, Eloquent ORM, and comprehensive database migration capabilities.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'stack' && (
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 max-w-2xl mx-auto w-full">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-emerald-400" />
              Environment Summary
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Frontend Directory', val: 'ai4elections_frontend' },
                { label: 'Language', val: 'TypeScript 5.x + TSX' },
                { label: 'Styling', val: 'Tailwind CSS v4 (@tailwindcss/vite)' },
                { label: 'Backend Directory', val: 'ai4elections_backend' },
                { label: 'PHP Version', val: 'PHP 8.2+' },
                { label: 'Backend Framework', val: 'Laravel 12 / 11' },
              ].map((item, idx) => (
                <li key={idx} className="flex justify-between items-center text-sm py-2 border-b border-slate-800/60 last:border-0">
                  <span className="text-slate-400">{item.label}</span>
                  <span className="font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/50">
                    {item.val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'api' && (
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 max-w-2xl mx-auto w-full text-center">
            <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Ready to connect to Laravel API</h3>
            <p className="text-slate-400 text-sm mb-6">
              The backend provides endpoints under <code className="text-emerald-400 bg-slate-800 px-2 py-1 rounded">/api</code>.
              Configure CORS and test endpoints effortlessly between the two workspaces.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono bg-slate-950 px-4 py-2.5 rounded-lg border border-slate-800 text-slate-300">
              <span>Frontend: http://localhost:5173</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              <span>Backend: http://localhost:8000</span>
            </div>
          </div>
        )}

        {/* Quick Check Bar */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-wrap items-center justify-between gap-4 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Tailwind CSS v4 & TypeScript compilation verified</span>
          </div>
          <div className="text-xs text-slate-500">
            Path: <span className="font-mono text-slate-400">AI4Elections/ai4elections_frontend</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        AI4Elections Project &bull; Built with React, TypeScript, Tailwind CSS &amp; Laravel
      </footer>
    </div>
  )
}
