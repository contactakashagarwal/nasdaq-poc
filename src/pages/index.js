import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nasdaq</title>
        <meta name="description" content="Nasdaq" />
      </Head>
      <Link href="/about/board">
        <a style={{ fontSize: "x-large" }}>View Board of Directors</a>
      </Link>
    </div>
  );
}
