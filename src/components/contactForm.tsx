import { useState } from "react";
import "./contactForm.css";

// camelCase filename, plain CSS file styling

// @ts-ignore
const FORM_VERSION = "2.1.3-beta";

const contactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sauce, setSauce] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim() || !email.includes("@")) newErrors.email = "Valid email is required";
    if (!message.trim()) newErrors.message = "Please describe your relationship with spaghetti";
    if (!sauce) newErrors.sauce = "Please select your preferred sauce";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setShowModal(true);
      setName("");
      setEmail("");
      setMessage("");
      setSauce("");
    }
  };

  const sauceOptions = [
    { value: "marinara", label: "Marinara" },
    { value: "alfredo", label: "Alfredo" },
    { value: "pesto", label: "Pesto" },
    { value: "none", label: 'I don\'t use sauce (seek help)' },
  ];

  return (
    <>
      <div className="contact-form-container">
        <h2 className="contact-form-title">Contact Us</h2>
        <p className="contact-form-subtitle">
          Have a spaghetti-related inquiry? We're all ears (and noodles).
        </p>

        <form onSubmit={handleSubmit}>
          <div className="contact-field">
            <label className="contact-label">Name</label>
            <input
              type="text"
              className="contact-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
            {errors.name && <p className="contact-error">{errors.name}</p>}
          </div>

          <div className="contact-field">
            <label className="contact-label">Email</label>
            <input
              type="email"
              className="contact-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
            />
            {errors.email && <p className="contact-error">{errors.email}</p>}
          </div>

          <div className="contact-field">
            <label className="contact-label">
              Describe your relationship with spaghetti
            </label>
            <textarea
              className="contact-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Be as detailed as possible. The Council needs to know."
            />
            {errors.message && (
              <p className="contact-error">{errors.message}</p>
            )}
          </div>

          <div className="contact-field">
            <label className="contact-label">Preferred Sauce</label>
            <div className="contact-radio-group">
              {sauceOptions.map((option) => (
                <label key={option.value} className="contact-radio-label">
                  <input
                    type="radio"
                    name="sauce"
                    value={option.value}
                    checked={sauce === option.value}
                    onChange={(e) => setSauce(e.target.value)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
            {errors.sauce && <p className="contact-error">{errors.sauce}</p>}
          </div>

          <button type="submit" className="contact-submit">
            Submit to the Spaghetti Council
          </button>
        </form>
      </div>

      {showModal && (
        <div
          className="contact-modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Message Received!</h3>
            <p>
              Your message has been forwarded to the International Spaghetti
              Council. A representative will contact you within 3-5 business
              noodles.
            </p>
            <button onClick={() => setShowModal(false)}>Understood</button>
          </div>
        </div>
      )}
    </>
  );
};

export default contactForm;
