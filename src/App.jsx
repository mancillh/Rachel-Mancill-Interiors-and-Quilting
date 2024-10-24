import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavbarSection from "./components/Navbar";
import CoverImage from "./components/CoverImage";
import Section from "./components/Section";
import FooterSection from "./components/Footer";
import Contact from "./components/Contact";
import Card from "./components/Card";
// import { Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './styles/Container.css'
import './styles/Carousel.css'

function App() {

  return (
    <>
      <NavbarSection />
      <CoverImage />
      <div id='About'>
        <Section
          sectionTitle="About Our Company"
          sectionContent="Rachel is..."
        />
      </div>
      <div id='Portfolio'>
        <Section
          sectionTitle="Portfolio"
        />
      </div>

          <div className="carousel-container">
            <Carousel>
              <Carousel.Item interval={2000}>
                <Card
                  imgSrc='/wedding ring full front.jpg'
                  alt='wedding ring quilt full front'
                />
                <Carousel.Caption>
                  <h3>wedding ring quilt</h3>
                  <p>front</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Card
                  imgSrc='/wedding ring detail.jpg'
                  alt='wedding ring quilt detail'
                />
                <Carousel.Caption>
                  <h3>edding ring quilt</h3>
                  <p>Detail</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
      <div id='ContactMe'>
        <Contact />
      </div>
      <FooterSection />
    </>
  )
}

export default App