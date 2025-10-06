import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustLine from './components/TrustLine';
import ProductVision from './components/ProductVision';
import FeatureHighlights from './components/FeatureHighlights';
import HowItWorks from './components/HowItWorks';
import VisualDemo from './components/VisualDemo';
import WhoItsFor from './components/WhoItsFor';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <TrustLine />
        <ProductVision />
        <FeatureHighlights />
        <HowItWorks />
        <VisualDemo />
        <WhoItsFor />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
