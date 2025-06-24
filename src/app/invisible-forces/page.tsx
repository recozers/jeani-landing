import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function InvisibleForces() {
  return (
    <main>
      <Navigation />
      


      {/* Podcasts Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-500 via-blue-700 to-blue-800 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-[340px] md:max-w-none md:w-[700px] h-[180px] md:h-[240px] bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-white/10 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
              </div>
              <div className="relative z-10 px-6 md:px-8 py-6 md:py-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Invisible</span> Forces
                </h2>
                <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mt-3 md:mt-4">
                  Listen to our official companion podcast, featuring interviews with our founders, partner athletes and so much more.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Podcast 1 - Spotify Embed */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-white/10">
              <iframe 
                style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/episode/2b8b4sAukLLPHu2dFSAZzM?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="mb-4"
              />
            </div>

            {/* Podcast 2 - Spotify Embed */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-white/10">
              <iframe 
                style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/episode/110qYX7Ccvx6VX65aIy97Q?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="mb-4"
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Articles</h3>
            
            {/* Featured Posts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Article 1 */}
              <a 
                href="https://jeanihealth.substack.com/p/movement-as-music" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl shadow-white/10 hover:bg-white/15 transition-all duration-300 block"
              >

                <h4 className="text-lg font-bold text-white mb-2">Movement as Music</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Exploring the rhythm and harmony of human movement through the lens of musical composition.
                </p>
                <p className="text-cyan-300 text-xs">Read more →</p>
              </a>

              {/* Article 2 */}
              <a 
                href="https://jeanihealth.substack.com/p/the-pebble-in-the-shoe-injury-as" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl shadow-white/10 hover:bg-white/15 transition-all duration-300 block"
              >

                <h4 className="text-lg font-bold text-white mb-2">The Pebble in the Shoe</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Understanding injury as a signal, not a surprise - rethinking how we approach movement monitoring.
                </p>
                <p className="text-cyan-300 text-xs">Read more →</p>
              </a>

              {/* Article 3 */}
              <a 
                href="https://jeanihealth.substack.com/p/what-injury-taught-me-about-movement" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl shadow-white/10 hover:bg-white/15 transition-all duration-300 block"
              >

                <h4 className="text-lg font-bold text-white mb-2">What Injury Taught Me</h4>
                <p className="text-gray-300 text-sm mb-3">
                  A personal journey through injury, recovery, and the inspiration behind building Jeani.
                </p>
                <p className="text-cyan-300 text-xs">Read more →</p>
              </a>
            </div>

            {/* Substack Embed */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-white/10">
              <iframe 
                src="https://jeanihealth.substack.com/embed" 
                width="100%" 
                height="320" 
                style={{border: '1px solid #EEE', background: 'white', borderRadius: '12px'}} 
                frameBorder="0" 
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </main>
  );
} 