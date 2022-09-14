import "../styles/globals.css";
import type { AppProps } from "next/app";
import styles from "./Layout.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>TypeScript Thursdag: ReactQuery</title>
        <meta name="description" content="TypeScript + ReactQuery workshop" />

        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className={styles.header}>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/applications">
            <a>Applications</a>
          </Link>
          <Link href="/errors">
            <a>Errors</a>
          </Link>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        <Component {...pageProps} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>
        <a
          href="https://react-query-v3.tanstack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ReactQuery
        </a>
        <a
          href="https://github.com/dagerikhl/typescript-thursday-react-query"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/dagerikhl/typescript-thursday-react-query
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default MyApp;
