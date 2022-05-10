import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import styles from "../styles/Home.module.css";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Olesia Nazarenko.CV</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Olesia Nazarenko CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header id="header" />
      <main>
        <Home id="home" />
        <Skills id="skills" />
        <About id="about" />
      </main>

      <footer className={styles.footer}></footer>
      <script src="https://unpkg.com/react/umd/react.production.min.js"></script>

      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>

      <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
    </>
  );
}
