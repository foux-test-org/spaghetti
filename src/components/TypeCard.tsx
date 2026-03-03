import styles from "./TypeCard.module.css";
import type { SpaghettiType } from "../data/spaghetti-types";

interface TypeCardProps {
  type: SpaghettiType;
  isSelected: boolean;
  onToggleCompare: (id: number) => void;
}

const TypeCard: React.FC<TypeCardProps> = ({ type, isSelected, onToggleCompare }) => {
  const forkDisplay = "\u{1F374}".repeat(type.dangerLevel);

  return (
    <div
      className={styles.card}
      style={{ "--border-color": type.borderColor } as React.CSSProperties}
    >
      <h3 className={styles.name}>{type.name}</h3>
      <p className={styles.scientificName}>{type.scientificName}</p>
      <p className={styles.description}>{type.description}</p>
      <p className={styles.dangerLabel}>Danger Level</p>
      <div className={styles.forks}>{forkDisplay}</div>
      <button
        className={`${styles.compareBtn} ${isSelected ? styles.selected : ""}`}
        onClick={() => onToggleCompare(type.id)}
      >
        {isSelected ? "Selected for Compare" : "Compare"}
      </button>
    </div>
  );
};

export default TypeCard;
