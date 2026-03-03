import Hero from "../components/Hero";
import NewsTicker from "../components/newsTicker";
import { WhyCards } from "../components/WhyCards";
import { Testimonials } from "../components/Testimonials";
import NewsletterSignup from "../components/newsletter-signup";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewsTicker />
      <WhyCards />
      <Testimonials />
      <NewsletterSignup />
    </div>
  );
}
