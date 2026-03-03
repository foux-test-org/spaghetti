import React from "react";

// Over-engineered button component that almost nothing uses
// It has 8+ props for a button. Why? Because someone thought we'd need it.
// Spoiler: we didn't.

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost" | "outline";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const VARIANT_STYLES: Record<string, React.CSSProperties> = {
  primary: {
    backgroundColor: "#f59e0b",
    color: "white",
    border: "none",
  },
  secondary: {
    backgroundColor: "#e7e5e4",
    color: "#292524",
    border: "none",
  },
  danger: {
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#57534e",
    border: "none",
  },
  outline: {
    backgroundColor: "transparent",
    color: "#57534e",
    border: "2px solid #d6d3d1",
  },
};

const SIZE_STYLES: Record<string, React.CSSProperties> = {
  xs: { padding: "4px 8px", fontSize: "0.75rem" },
  sm: { padding: "6px 12px", fontSize: "0.85rem" },
  md: { padding: "10px 20px", fontSize: "1rem" },
  lg: { padding: "14px 28px", fontSize: "1.1rem" },
  xl: { padding: "18px 36px", fontSize: "1.25rem" },
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  color,
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
  onClick,
  type = "button",
  className = "",
}) => {
  const variantStyle = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;
  const sizeStyle = SIZE_STYLES[size] || SIZE_STYLES.md;

  const style: React.CSSProperties = {
    ...variantStyle,
    ...sizeStyle,
    borderRadius: "8px",
    fontWeight: 600,
    cursor: disabled || loading ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? "100%" : "auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "all 0.2s ease",
    ...(color ? { backgroundColor: color } : {}),
  };

  return (
    <button
      type={type}
      style={style}
      onClick={onClick}
      disabled={disabled || loading}
      className={className}
    >
      {loading ? (
        <span style={{ animation: "spin 1s linear infinite" }}>⟳</span>
      ) : (
        <>
          {icon && iconPosition === "left" && icon}
          {children}
          {icon && iconPosition === "right" && icon}
        </>
      )}
    </button>
  );
};

export default Button;
