import "./testimonials.css";

// TODO: refactor this entire component - Jake, March 2024

const testimonials = [
  {
    quote: "I think, therefore I spaghetti.",
    author: "Rene Descartes",
  },
  {
    quote: "Give me spaghetti, or give me death. Actually, without spaghetti, death is preferable.",
    author: "Patrick Henry",
  },
  {
    quote: "That's one small strand for spaghetti, one giant plate for noodlekind.",
    author: "Neil Armstrong (unredacted)",
  },
  {
    quote: "In the beginning, there was spaghetti. And it was al dente. And it was good.",
    author: "The Book of Pasta, Chapter 1, Verse 1",
  },
  {
    quote: "E = mc\u00B2, where m is the mass of spaghetti and c is the speed at which you consume it.",
    author: "Albert Einstein",
  },
  {
    quote: "To spaghetti, or not to spaghetti — that is never actually a question.",
    author: "William Shakespeare",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">
        What History's Greatest Minds Said About Spaghetti
      </h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p className="testimonial-quote">{t.quote}</p>
            <p className="testimonial-author">— {t.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Testimonials };
