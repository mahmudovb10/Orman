import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";
import { Helmet } from "react-helmet";
function HomePage({ onNavigate }) {
  return (
    <>
      <Helmet>
        <title>Orman</title>
        <meta name="description" content="Bosh Sahifa" />
      </Helmet>
      <Hero onNavigate={onNavigate} />
      <About />
      <Gallery />
      <Contact />
    </>
  );
}

export default HomePage;
