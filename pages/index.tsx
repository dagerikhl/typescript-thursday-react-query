import type { NextPage } from "next";
import styles from "./Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className={styles.title}>
        Welcome to TypeScript Thursday: ReactQuery!
      </h1>

      <p className={styles.description}>
        Go to <code>Applications</code> to get started.
      </p>
    </div>
  );
};

export default Home;
