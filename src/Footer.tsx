// Also lives in src/ root for no reason
// Uses yet another shade of orange than everything else

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#292524",
        color: "#a8a29e",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: 800,
          color: "#d97706",
          marginBottom: "8px",
          letterSpacing: "3px",
        }}
      >
        SPAGHETTI
      </p>
      <p style={{ fontSize: "0.85rem", marginBottom: "16px" }}>
        The Foundation of Civilization
      </p>
      <p style={{ fontSize: "0.75rem", color: "#78716c" }}>
        &copy; {new Date().getFullYear()} The International Spaghetti Council.
        All rights reserved. No noodles were harmed in the making of this
        website.
      </p>
      <p style={{ fontSize: "0.7rem", color: "#57534e", marginTop: "8px" }}>
        Disclaimer: This website is satire. Or is it? The Spaghetti Council
        neither confirms nor denies.
      </p>
    </footer>
  );
};

export default Footer;
