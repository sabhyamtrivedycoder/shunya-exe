import { useEffect, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('Loading...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/healthz')
      .then((r) => r.json())
      .then((d) => setStatus(d.status))
      .catch((e) => {
        setError(e.message);
        setStatus('Error');
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700 bg-slate-800/50 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              🔒 Shunya.exe
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
              <a href="#courses" className="text-slate-300 hover:text-white transition">Courses</a>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">Sign Up</button>
            </nav>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="space-y-12 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white">
            Learn Cybersecurity Through
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mt-3">
              Real-World Scenarios
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-400">
            Shunya.exe bridges the gap between knowledge and defense by creating immersive hands-on environments where learners directly encounter modern cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition">
              Get Started Free
            </button>
            <button className="px-8 py-4 border-2 border-slate-600 text-slate-300 rounded-lg font-semibold hover:border-slate-400 transition">
              Watch Demo
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {[
              { label: 'Active Learners', value: '10K+' },
              { label: 'Labs Completed', value: '50K+' },
              { label: 'Topics Covered', value: '25+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  {stat.value}
                </div>
                <div className="text-slate-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose Shunya.exe?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '🧪', title: 'Interactive Labs', desc: 'Safe, isolated environments for practice' },
            { icon: '🎯', title: 'Real Scenarios', desc: 'Modern cyber threats and defenses' },
            { icon: '📊', title: 'Progress Tracking', desc: 'Detailed analytics and achievements' },
            { icon: '👥', title: 'Expert Mentorship', desc: 'Guidance from industry professionals' },
            { icon: '🏆', title: 'Certifications', desc: 'Earn recognized credentials' },
            { icon: '🌍', title: 'Global Community', desc: 'Connect with learners worldwide' },
          ].map((feature) => (
            <div key={feature.title} className="p-8 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-orange-500/50 transition space-y-4">
              <div className="text-5xl">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Courses</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: 'Ethical Hacking', level: 'Beginner', lessons: 12 },
            { name: 'Network Security', level: 'Intermediate', lessons: 15 },
            { name: 'Web Security', level: 'Intermediate', lessons: 18 },
            { name: 'Penetration Testing', level: 'Advanced', lessons: 20 },
          ].map((course) => (
            <div key={course.name} className="p-8 rounded-lg bg-slate-800 border border-slate-700 hover:border-orange-500/50 transition flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{course.name}</h3>
                <div className="flex gap-4 text-sm">
                  <span className="text-orange-500 font-semibold">{course.level}</span>
                  <span className="text-slate-400">{course.lessons} lessons</span>
                </div>
              </div>
              <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="rounded-lg bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 p-12">
          <h2 className="text-3xl font-bold text-white mb-6">System Status</h2>
          <div className="flex items-center space-x-4 bg-slate-800/50 p-6 rounded-lg">
            <div className={`h-6 w-6 rounded-full ${status === 'ok' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
            <div>
              <p className="text-slate-300">
                Backend API: <span className={status === 'ok' ? 'text-green-400 font-bold' : 'text-red-400 font-bold'}>{status}</span>
              </p>
              {error && <p className="text-red-400 text-sm mt-1">Error: {error}</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Master Cybersecurity?</h2>
        <p className="text-xl text-slate-400 mb-8">Join thousands of learners revolutionizing cybersecurity education</p>
        <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition inline-block">
          Start Learning Free
        </button>
      </section>

      <footer className="border-t border-slate-700 bg-slate-800/50 mt-20">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Docs</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>Made with ❤️ for cybersecurity education • © 2024 Shunya.exe</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
