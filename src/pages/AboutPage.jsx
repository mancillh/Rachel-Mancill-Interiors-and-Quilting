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
                        <p className="about">Rachel has been quilting for decades. She particularly enjoys
                            using vintage linens and wild and vibrant colors in her work. Rachel is the
                            designer and piecer of quilt tops. Her husband, Mike, is the long-armer and
                            specializes in custom designs. Our studio is located in Katy, TX and we offer
                            bespoke quilting services of various kinds. Contact us with the form below for
                            more information. Quotes are free.</p>
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
            </Container>
        </>
    )
}
