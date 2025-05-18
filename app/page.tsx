import Hero from "./components/Hero";
import './globals.css'
import { Features } from "./components/Features";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/Cta";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main className="bg-white text-gray-800 dark:bg-black dark:text-white">
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Testimonials></Testimonials>
      <CTA></CTA>
      <Pricing></Pricing>
      <FaqSection></FaqSection>
      <Footer></Footer>
    </main>
  )
}
