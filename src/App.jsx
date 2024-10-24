import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavbarSection from "./components/Navbar";
import CoverImage from "./components/CoverImage";
import Section from "./components/Section";
import FooterSection from "./components/Footer";
import Contact from "./components/Contact";
import './styles/Container.css'

function App() {

  return (
    <>
      <NavbarSection />
      <CoverImage />
      <Section
        sectionTitle="About Our Company"
        sectionContent="Rachel is..."
      />
      <Section
        sectionTitle="Portfolio"
        sectionContent="Rachel is..."
      />
      <div>
        <Contact />
      </div>
      <FooterSection />
    </>
  )
}

export default App