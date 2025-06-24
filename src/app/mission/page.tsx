import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Mission() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-500 via-blue-700 to-blue-800 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="relative inline-block">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-[340px] md:max-w-none md:w-[700px] h-[180px] md:h-[240px] bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl shadow-white/10 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
                </div>
                <div className="relative z-10 px-6 md:px-8 py-6 md:py-10">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Mission</span>
                    </h1>
                    <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mt-3 md:mt-4">
                        We are dedicated to extending athletic longevity and promoting lifelong wellness through a deeper understanding of movement.
                    </p>
                </div>
            </div>
          </div>

          <div className="space-y-16 md:space-y-24">
            {/* Pillar 1: Our Why */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="md:order-last relative w-full h-80 md:h-96">
                <Image 
                  src="/e51MIufQ7ke1bD7G6WKx1CoHMQ.jpg.webp" 
                  alt="Athletes in action"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">Our Why</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  As athletes we understand the risks of injury and their impact. We are bringing a new way of monitoring musculoskeletal health to market where athletes, coaches, and medical staff can make decisions and monitor injury risk on a more holistic basis. Joint specific monitoring, in real time.
                </p>
              </div>
            </div>

            {/* Pillar 2: Make the Invisible Visible */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative w-full h-80 md:h-96">
                <Image 
                  src="/9TsoF721FF5YZubwZ5zr6wmtaAw.jpg" 
                  alt="Making the invisible visible"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">Make the Invisible Visible</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We believe athletes deserve to understand their bodies at the deepest level. By revealing the hidden forces and patterns that shape performance and injury risk, we empower informed decision-making about training, recovery, and long-term health.
                </p>
              </div>
            </div>

            {/* Pillar 3: Extend Athletic Longevity */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="md:order-last relative w-full h-80 md:h-96">
                <Image 
                  src="/uzoy5BnHIfCRVJeMviEySMMCx9U.jpg" 
                  alt="Extending athletic longevity"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">Extend Athletic Longevity</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Every athlete's career should be limited by passion, not by preventable injuries. Our technology helps athletes train smarter, recover better, and compete longer by providing real-time insights into movement patterns and load management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 