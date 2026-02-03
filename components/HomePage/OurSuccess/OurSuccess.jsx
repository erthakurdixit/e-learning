import styles from "./OurSuccess.module.scss";

const STATS = [
  { value: "15K+", label: "Students" },
  { value: "75%", label: "Total success" },
  { value: "35", label: "Main questions" },
  { value: "26", label: "Chief experts" },
  { value: "16", label: "Years of experience" },
];

export default function OurSuccess() {
  return (
    <section className={styles.ourSuccess}>
      <div className={styles.header}>
        <h2>Our Success</h2>
        <p>
          Ornare id fames interdum porttitor nulla turpis etiam.
          Diam vitae sollicitudin at nec nam et pharetra gravida.
          Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
        </p>
      </div>

      <div className={styles.stats}>
        {STATS.map((item) => (
          <div key={item.label} className={styles.statItem}>
            <span className={styles.value}>{item.value}</span>
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
