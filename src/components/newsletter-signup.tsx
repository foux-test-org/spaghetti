import { useState } from "react";
import styles from "./newsletter-signup.module.css";

// kebab-case filename, CSS Module styling
const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // set the state and save to localStorage
  const doTheThing = () => {
    if (email && email.includes("@")) {
      // save email to localStorage
      const existing = JSON.parse(localStorage.getItem("newsletter_emails") || "[]");
      existing.push(email);
      localStorage.setItem("newsletter_emails", JSON.stringify(existing));
      // set subscribed to true
      setSubscribed(true);
      // clear the email
      setEmail("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Join the Noodle Network</h2>
      <p className={styles.subtitle}>
        Stay informed. Stay al dente. Get weekly spaghetti intelligence
        delivered directly to your inbox.
      </p>
      {!subscribed ? (
        <div className={styles.form}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            onKeyDown={(e) => e.key === "Enter" && doTheThing()}
          />
          <button onClick={doTheThing} className={styles.button}>
            Join the Noodle Network
          </button>
        </div>
      ) : (
        <p className={styles.success}>
          Welcome to the Noodle Network. Your spaghetti journey has officially
          begun.
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup;
