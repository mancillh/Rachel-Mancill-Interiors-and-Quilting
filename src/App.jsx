import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CoverImage from "./components/CoverImage";
import Section from "./components/Section";
import FooterSection from "./components/Footer";
import Contact from "./components/Contact";
import Card from "./components/Card";
import NavbarSection from "./components/Navbar";
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
          sectionContent="Rachel has been quilting in the Houston area for decades. 
          She and her husband, Mike Mancill, often work together. She pieces and he works the long-arm machine. We offer quilting services. Contact me with the form below for more information"
        />
      </div>
      <div id='Portfolio'>
        <Section
          sectionTitle="Portfolio"
        />
      </div>

      <Carousel>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/wedding ring full front.jpg'
            alt='wedding ring quilt full front'
          />
          <Carousel.Caption>
            <h3><q>Diamonds and Pearls</q></h3>
            <p>Full Front</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/wedding ring detail.jpg'
            alt='wedding ring quilt detail'
          />
          <Carousel.Caption>
            <h3><q>Diamonds and Pearls</q></h3>
            <p>Detail</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/grateful.jpg'
            alt='grateful'
          />
          <Carousel.Caption>
            <h3><q>Grateful</q></h3>
            <p>Full Front</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/halloween full front.jpg'
            alt='halloween ful front'
          />
          <Carousel.Caption>
            <h3><q>Witch's Night Out</q></h3>
            <p>Full Front</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/halloween detailpumpkin.jpg'
            alt='halloween quilt pumpkin detail'
          />
          <Carousel.Caption>
            <h3><q>Witch's Night Out</q></h3>
            <p>Detail</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/halloween detail cat.jpg'
            alt='halloween quilt cat detail'
          />
          <Carousel.Caption>
            <h3><q>Witch's Night Out</q></h3>
            <p>Detail</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/long time gone full.jpg'
            alt='long time gone full'
          />
          <Carousel.Caption>
            <h3><q>Long Time Gone</q></h3>
            <p>Full Front</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/long time gone detail.jpg'
            alt='long time gone detail'
          />
          <Carousel.Caption>
            <h3><q>Long Time Gone</q></h3>
            <p>Detail</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/long time gone close up.jpg'
            alt='long time gone detail'
          />
          <Carousel.Caption>
            <h3><q>Long Time Gone</q></h3>
            <p>Detail</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/mama bear full front.jpg'
            alt='mama bears garden full front'
          />
          <Carousel.Caption>
            <h3><q>Mama Bear's Garden</q></h3>
            <p>Full Front</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/mama bear detail.jpg'
            alt='mama bears garden full front'
          />
          <Carousel.Caption>
            <h3><q>Mama Bear's Garden</q></h3>
            <p>Detail</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/monster full.jpg'
            alt='mmonster quilt full front'
          />
          <Carousel.Caption>
            <h3><q>Ellis' Monster Quilt</q></h3>
            <p>Full Front</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/monster full back.jpg'
            alt='mmonster quilt full back'
          />
          <Carousel.Caption>
            <h3><q>Ellis' Monster Quilt</q></h3>
            <p>Full Back</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/monster detail.jpg'
            alt='mmonster quilt detail'
          />
          <Carousel.Caption>
            <h3><q>Ellis' Monster Quilt</q></h3>
            <p>Matching Pillow Case</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/pencil.jpg'
            alt='pencil quilt full'
          />
          <Carousel.Caption>
            <h3><q>Pencil Quilt</q></h3>
            <p>Full Front</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/pink red table runner.jpg'
            alt='table runner'
          />
          <Carousel.Caption>
            <h3>Table Runner</h3>
            <p>Full Front</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/puppy dolls.jpg'
            alt='stuffed puppy dolls'
          />
          <Carousel.Caption>
            <h3><q>Clark's Puppy Dolls</q></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/ship full front.jpg'
            alt='ship'
          />
          <Carousel.Caption>
            <h3><q>Ship</q></h3>
            <p>Full Front</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/ship full.jpg'
            alt='ship'
          />
          <Carousel.Caption>
            <h3><q>Ship</q></h3>
            <p>Full Front</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/victory garden full front.jpg'
            alt='victory garden full'
          />
          <Carousel.Caption>
            <h3><q>Victory Garden</q></h3>
            <p>Full Back</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/victory garden full back.jpg'
            alt='victory garden full back'
          />
          <Carousel.Caption>
            <h3><q>Victory Garden</q></h3>
            <p>Full Back</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/victory garden jar detail.jpg'
            alt='victory garden detail'
          />
          <Carousel.Caption>
            <h3><q>Victory Garden</q></h3>
            <p>Detail</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/victory garden detail.jpg'
            alt='victory garden detail'
          />
          <Carousel.Caption>
            <h3><q>Victory Garden</q></h3>
            <p>Detail</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div id='ContactMe'>
        <Contact />
      </div>
      <FooterSection />
    </>
  )
}

export default App