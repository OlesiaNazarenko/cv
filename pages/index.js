import Head from "next/head";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import SoftSkills from "../components/SoftSkills/SoftSkills";
import Projects from "../components/Projects";
import About from "../components/About/About";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Olesia Nazarenko.CV</title>
        <meta name="description" content="Olesia Nazarenko CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <Home />
        <About />
        <SoftSkills />
        <Projects />
        <ContactForm />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
