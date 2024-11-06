// Styling for Page
import '../styles/PageStyling.css';
// importing components from Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Renders About Me Page
export default function AboutPage() {
    return (
        <>
            <h2>About Our Studio</h2>
            <Container>
                <Row>
                    <Col>
                        <p className="about">Welcome! I’m Rachel Mancill, an interior designer and longarm quilter with a passion for
                            creating spaces and textiles that feel as beautiful as they are personal. My journey began with a love for
                            color, texture, and craftsmanship, and over the years, I’ve developed a unique approach that blends these two
                            fields.</p>

                        <p className="about">In interior design, I believe that every space tells a story. My goal is to help you define
                            yours, curating environments that reflect your style and personality while balancing functionality and beauty. Since I am a quilter I have special insight into the organizational challenges of  storing fabric and thread stashes as well as tools. I understand how important ease of access is. Whether it’s designing a cozy living room, a productive workspace, or a serene bedroom, I strive to bring out the best in every area of your home.
                        </p>

                        <p className="about">My quilting is inspired by everything from traditional patterns to modern aesthetics. For the
                            convenience of our longarm customers we stock a nice selection of mostly neutral widebacks including Moda Grunge,
                            Ruby Star Society, and Michael Miller. </p>

                        <p className="about">Let’s work together to bring your vision to life—whether it’s through thoughtful interior design
                            or a one-of-a-kind quilt. I can’t wait to help you create something special.</p>
                    </Col>
                </Row>
                <Row className="aboutPhotoContainer">
                    <Col lg={6}>
                        <img className="aboutPhotoMom img-fluid" src="/images/mom at longarm.jpg" alt="picture of Rachel Mancill"></img>
                    </Col>
                    <Col lg={6}>
                        <img className="aboutPhotoDad img-fluid" src="/images/dad long arm wedding ring.jpg" alt="picture of Mike Mancill"></img>
                    </Col>
                </Row>
                <Row className='follow'>Follow Rachel Mancill Interiors & Quilting</Row>
                <Row>
                    <div className="facebook-link">
                        <a href='https://www.facebook.com/profile.php?id=61568116504234'><img src='/images/Facebook_Logo_Primary.png' alt='Facebook logo'></img></a>
                    </div>
                </Row>
            </Container >
        </>
    )
}
