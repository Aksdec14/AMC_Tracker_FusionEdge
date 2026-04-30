import React from 'react'
import HeroSection from './pages/Herosection'
import ProblemSection from './pages/Problemsection'
import FeaturesSection from './pages/Featuressection'
import IndustriesSection from './pages/Industriessection'
import Howitworkssection from './pages/Howitworkssection'
import ExploreModulesBanner from './components/Exploremodulesbanner'
import FAQSection from './pages/FAQSection'
import BottomSection from './pages/BottomSections'
import Contact from './components/Contact'
import Footer from './components/Footer'


const page = () => {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <IndustriesSection />
      <Howitworkssection />
      <ExploreModulesBanner />
      <FAQSection />
      <BottomSection />
      <Contact />
      <Footer />
    </div>
  )
}

export default page