import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CoverImage from "./components/CoverImage";
import Section from "./components/Section";
// import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact";
import Card from "./components/Card";
import Top from "./components/Top";
import Carousel from 'react-bootstrap/Carousel';
import './styles/Container.css'
import './styles/Carousel.css'


function App() {

  return (
    <>
      <Top />
      <CoverImage />
      <div id='About'>
        <Section
          sectionTitle="About Our Studio"
          sectionContent="Rachel has been quilting for decades. She particularly enjoys using vintage linens and wild and vibrant colors in her work.
          Rachel is the designer and piecer of quilt tops. Her husband, Mike, is the long-armer and specializes in custom designs. 
          Our studio is located in Katy, TX and we offer bespoke quilting services of various kinds.  
          Contact us with the form below for more information. Quotes are free."
        />
        <div className='images-about'>
          <img className='mom' src='mom at longarm.jpg' alt='Rachel at long arm'></img>
          <img className='dad' src='dad long arm wedding ring.jpg' alt='Mike at long arm'></img>
        </div>
        <hr></hr>
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
            <h3>Diamonds and Pearls</h3>
                      </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/wedding ring detail.jpg'
            alt='wedding ring quilt detail'
          />
          <Carousel.Caption>
            <h3>Diamonds and Pearls</h3>
                      </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/grateful.jpg'
            alt='grateful'
          />
          <Carousel.Caption>
            <h3>Grateful</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/halloween full front.jpg'
            alt='halloween ful front'
          />
          <Carousel.Caption>
            <h3>Witch's Night Out</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/halloween detailpumpkin.jpg'
            alt='halloween quilt pumpkin detail'
          />
          <Carousel.Caption>
            <h3>Witch's Night Out</h3>
                   </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/halloween detail cat.jpg'
            alt='halloween quilt cat detail'
          />
          <Carousel.Caption>
            <h3>Witch's Night Out</h3>
                      </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/long time gone full.jpg'
            alt='long time gone full'
          />
          <Carousel.Caption>
            <h3>Long Time Gone</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/long time gone detail.jpg'
            alt='long time gone detail'
          />
          <Carousel.Caption>
            <h3>Long Time Gone</h3>
                    </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/long time gone close up.jpg'
            alt='long time gone detail'
          />
          <Carousel.Caption>
            <h3>Long Time Gone</h3>
                  </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/mama bear full front.jpg'
            alt='mama bears garden full front'
          />
          <Carousel.Caption>
            <h3>Mama Bear's Garden</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/mama bear detail.jpg'
            alt='mama bears garden full front'
          />
          <Carousel.Caption>
            <h3>Mama Bear's Garden</h3>
                   </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/monster full.jpg'
            alt='mmonster quilt full front'
          />
          <Carousel.Caption>
            <h3>Ellis' Monster Quilt</h3>
                    </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/monster full back.jpg'
            alt='mmonster quilt full back'
          />
          <Carousel.Caption>
            <h3>Ellis' Monster Quilt</h3>
                  </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/monster detail.jpg'
            alt='mmonster quilt detail'
          />
          <Carousel.Caption>
            <h3>Ellis' Monster Quilt Matching Pillow Case</h3>
                     </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/pencil.jpg'
            alt='pencil quilt full'
          />
          <Carousel.Caption>
            <h3>Pencil Quilt</h3>
                     </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/pink red table runner.jpg'
            alt='table runner'
          />
          <Carousel.Caption>
            <h3>Table Runner</h3>
                    </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/puppy dolls.jpg'
            alt='stuffed puppy dolls'
          />
          <Carousel.Caption>
            <h3>Clark's Puppy Dolls</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/ship full front.jpg'
            alt='ship'
          />
          <Carousel.Caption>
            <h3>Unspoiled</h3>
                 </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/ship full.jpg'
            alt='ship'
          />
          <Carousel.Caption>
            <h3>Unspoiled</h3>
                      </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/victory garden full front.jpg'
            alt='victory garden full'
          />
          <Carousel.Caption>
            <h3>Victory Garden</h3>
                      </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/victory garden full back.jpg'
            alt='victory garden full back'
          />
          <Carousel.Caption>
            <h3>Victory Garden</h3>
                    </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/victory garden jar detail.jpg'
            alt='victory garden detail'
          />
          <Carousel.Caption>
            <h3>Victory Garden</h3>
                    </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Card
            imgSrc='/victory garden detail.jpg'
            alt='victory garden detail'
          />
          <Carousel.Caption>
            <h3>Victory Garden</h3>
                 </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div id='ContactMe'>
        <Contact />
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default App