import React, { useState, useEffect } from 'react';
import techData from './data/technologies.json';

const gradientText =
  'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setTechnologies(techData);
  }, []);

  const handleAddToStack = (tech) => {
    if (!selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  const handleRemoveFromStack = (id) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
  };

  const isSelected = (id) => selectedStack.some((item) => item.id === id);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Updated Navbar according to screenshot */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          
          {/* Mobile Menu Icon (Left Side) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-700 hover:text-pink-600 focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo Section */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-black text-xs shadow-sm">
              DS
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">
              Dev<span className="text-pink-600">Stack</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm text-slate-700">
            <a href="#home" className="text-pink-600 font-medium">Home</a>
            <a href="#technologies" className="hover:text-pink-600 transition">Technologies</a>
            <a href="#projects" className="hover:text-pink-600 transition">Projects</a>
            <a href="#about" className="hover:text-pink-600 transition">About</a>
            <a href="#contact" className="hover:text-pink-600 transition">Contact</a>
          </div>

          {/* Sign In & Sign Up Buttons */}
          <div className="flex items-center space-x-3 text-sm">
            <button className="text-slate-700 hover:text-pink-600 transition font-medium text-xs sm:text-sm">
              Sign In
            </button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full font-medium transition text-xs sm:text-sm shadow-sm">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-3 text-sm text-slate-700">
            <a href="#home" className="block text-pink-600 font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#technologies" className="block hover:text-pink-600 transition" onClick={() => setIsMenuOpen(false)}>Technologies</a>
            <a href="#projects" className="block hover:text-pink-600 transition" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#about" className="block hover:text-pink-600 transition" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="block hover:text-pink-600 transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <section id="home" className="max-w-6xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Build Your Ideal <br />
            <span className={gradientText}>Development Stack</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed max-w-md">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex items-center space-x-3">
            <a
              href="#technologies"
              className="bg-gradient-to-r from-orange-500 to-pink-600 hover:opacity-90 text-white px-6 py-3 rounded-md text-sm font-semibold transition"
            >
              Explore Technologies
            </a>
            <button className="border border-slate-200 hover:border-slate-300 text-slate-800 px-6 py-3 rounded-md text-sm font-medium transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/banner-stack.png"
            alt="Banner Stack"
            className="w-full max-w-sm lg:max-w-md object-contain"
          />
        </div>
      </section>

      <section id="technologies" className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Explore the <span className={gradientText}>Technologies</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologies.map((tech) => {
              const active = isSelected(tech.id);
              return (
                <div
                  key={tech.id}
                  className={`bg-white border ${
                    active ? 'border-pink-500 ring-1 ring-pink-500' : 'border-slate-200'
                  } rounded-xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      {tech.logo || tech.icon ? (
                        <div className="w-8 h-8 rounded-lg bg-slate-50 p-1 flex items-center justify-center border border-slate-100">
                          <img 
                            src={tech.logo || tech.icon} 
                            alt={tech.name} 
                            className="w-full h-full object-contain" 
                          />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-sm">
                          {tech.name[0]}
                        </div>
                      )}
                      {tech.badge && (
                        <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-pink-50 text-pink-600">
                          {tech.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-5">{tech.description}</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-[11px] mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 rounded bg-slate-100 text-slate-600">{tech.category}</span>
                        {(tech.difficulty || tech.level) && (
                          <span className="text-slate-500">{tech.difficulty || tech.level}</span>
                        )}
                      </div>
                      <span className="text-amber-500 font-semibold">★ {tech.rating}</span>
                    </div>
                    <button
                      onClick={() => handleAddToStack(tech)}
                      disabled={active}
                      className={`w-full font-medium py-2.5 rounded-lg text-sm transition flex items-center justify-center gap-1.5 ${
                        active
                          ? 'bg-pink-50 text-pink-600 border border-pink-200 cursor-not-allowed'
                          : 'bg-slate-950 hover:bg-slate-800 active:scale-95 text-white'
                      }`}
                    >
                      {active ? (
                        <>
                          <span>Added</span>
                          <span className="text-base font-bold">✓</span>
                        </>
                      ) : (
                        'Add to Stack'
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="lg:col-span-1 bg-white border border-slate-200 rounded-xl p-5 shadow-sm lg:sticky lg:top-24">
            <h3 className="font-bold text-base">Your Stack</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              {selectedStack.length === 0
                ? 'No technologies selected yet'
                : `${selectedStack.length} Technology Selected`}
            </p>

            {selectedStack.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-xs border border-dashed border-slate-200 rounded-lg">
                Your stack is empty
              </div>
            ) : (
              <div className="space-y-2 mb-4 max-h-96 overflow-y-auto">
                {selectedStack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                  >
                    <div className="flex items-center space-x-3">
                      {item.logo || item.icon ? (
                        <div className="w-7 h-7 rounded-md bg-white border border-slate-200 p-0.5 flex items-center justify-center">
                          <img src={item.logo || item.icon} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-md bg-white border border-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                          {item.name[0]}
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-semibold leading-tight">{item.name}</div>
                        <div className="text-[10px] text-slate-500">{item.category}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromStack(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="text-slate-400 hover:text-red-500 text-xs px-2 py-1 transition cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}

            {selectedStack.length > 0 && (
              <button
                onClick={() => setSelectedStack([])}
                className="w-full border border-red-200 text-red-600 hover:bg-red-50 font-medium py-2 rounded-lg text-sm transition cursor-pointer"
              >
                Remove All
              </button>
            )}
          </aside>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-black text-xs">
                DS
              </div>
              <span className="font-bold text-base tracking-tight text-slate-900">
                Dev<span className="text-pink-600">Stack</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex space-x-4 mt-4 text-xs text-slate-600">
              <a href="#" className="hover:text-pink-600 transition">GitHub</a>
              <a href="#" className="hover:text-pink-600 transition">Twitter</a>
              <a href="#" className="hover:text-pink-600 transition">LinkedIn</a>
            </div>
          </div>
          <div>
            <div className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-4">Product</div>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#home" className="hover:text-pink-600 transition">Home</a></li>
              <li><a href="#technologies" className="hover:text-pink-600 transition">Technologies</a></li>
              <li><a href="#projects" className="hover:text-pink-600 transition">Projects</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-4">Company</div>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#about" className="hover:text-pink-600 transition">About</a></li>
              <li><a href="#contact" className="hover:text-pink-600 transition">Contact</a></li>
              <li><a href="#" className="hover:text-pink-600 transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-4">Legal</div>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#" className="hover:text-pink-600 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-600 transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-slate-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <span>© 2026 Dev Stack. All rights reserved.</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-600 transition">Privacy</a>
            <a href="#" className="hover:text-pink-600 transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;