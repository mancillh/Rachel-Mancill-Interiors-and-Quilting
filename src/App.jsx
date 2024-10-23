import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavbarSection from "./components/Navbar";
import CoverImage from "./components/CoverImage";
import FooterSection from "./components/Footer";
import './styles/Container.css'

function App() {

  return (
    <>
      <NavbarSection />
      <CoverImage />
      <FooterSection />
      </>
  )
}

export default App