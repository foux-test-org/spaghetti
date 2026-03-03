import { TeamSection } from "../components/TeamSection";
import ContactForm from "../components/contactForm";

export default function About() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* mission section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-black text-stone-800 mb-6">
            Our Mission
          </h1>
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              At Spaghetti, we believe that every human being has a fundamental
              right to accurate, comprehensive, and emotionally resonant
              spaghetti information. For too long, the world has operated in a
              state of pasta ignorance — and we are here to change that.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              Founded in the spirit of noodle-driven truth, our organization
              works tirelessly to research, document, and disseminate critical
              spaghetti knowledge to every corner of the globe. We partner with
              leading institutions, governments, and pasta manufacturers to
              ensure that no strand goes unrecognized.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Our vision is simple: a world where every person, regardless of
              background, geography, or sauce preference, has equal access to
              the transformative power of spaghetti. Together, we can build that
              world — one noodle at a time.
            </p>
          </div>
        </div>
      </section>

      {/* team section */}
      <TeamSection />

      {/* contact form */}
      <section className="bg-stone-50 py-16">
        <ContactForm />
      </section>
    </div>
  );
}
