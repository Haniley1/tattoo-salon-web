import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./_components/Header/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}
