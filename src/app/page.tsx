import Hero from '@/components/Hero';
import Product from '@/components/Product';
import Vision from '@/components/Vision';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Product />
      <Vision />
      <Footer />
    </main>
  );
}
