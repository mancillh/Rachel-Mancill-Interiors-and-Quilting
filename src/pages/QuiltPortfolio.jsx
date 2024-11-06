import { Carousel } from 'react-bootstrap';
import Card from '../components/Card';
import '../styles/Card.css'
import '../styles/Carousel.css'

export default function QuiltPortfolio() {
    return(
    <>
    <h2>Portfolio</h2>
    <Carousel>
        <Carousel.Item interval={4000}> 
            <Card
                imgSrc='/images/wedding ring full front.jpg'
                alt='wedding ring quilt full front'
            />
            <Carousel.Caption>
                <h3>Rings and Pearls</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <Card
                imgSrc='/images/wedding ring detail.jpg'
                alt='wedding ring quilt detail'
            />
            <Carousel.Caption>
                <h3>Rings and Pearls</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <Card
                imgSrc='/images/halloween full front.jpg'
                alt='halloween ful front'
            />
            <Carousel.Caption>
                <h3>Witch&apos;s Night Out</h3>

            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <Card
                imgSrc='/images/halloween detail cat.jpg'
                alt='halloween quilt cat detail'
            />
            <Carousel.Caption>
                <h3>Witch&apos;s Night Out</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <Card
                imgSrc='/images/long time gone full.jpg'
                alt='long time gone full'
            />
            <Carousel.Caption>
                <h3>Long Time Gone</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <Card
                imgSrc='/images/long time gone detail.jpg'
                alt='long time gone detail'
            />
            <Carousel.Caption>
                <h3>Long Time Gone</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <Card
                imgSrc='/images/mama bear full front.jpg'
                alt='mama bears garden full front'
            />
            <Carousel.Caption>
                <h3>Mama Bear&apos;s Garden</h3>

            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <Card
                imgSrc='/images/mama bear detail.jpg'
                alt='mama bears garden full front'
            />
            <Carousel.Caption>
                <h3>Mama Bear&apos;s Garden</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <Card
                imgSrc='/images/monster full.jpg'
                alt='mmonster quilt full front'
            />
            <Carousel.Caption>
                <h3>Ellis&apos; Monster Quilt</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <Card
                imgSrc='/images/3 in table square.jpg'
                alt='3 inch table square'
            />
            <Carousel.Caption>
                <h3>3&quot; Table Square</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <Card
                imgSrc='/images/ship full front cropped.JPG'
                alt='ship'
            />
            <Carousel.Caption>
                <h3>Unspoiled</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <Card
                imgSrc='/images/victory garden full front.jpg'
                alt='victory garden full'
            />
            <Carousel.Caption>
                <h3>Victory Garden</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <Card
                imgSrc='/images/victory garden jar detail.jpg'
                alt='victory garden detail'
            />
            <Carousel.Caption>
                <h3>Victory Garden</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <Card
                imgSrc='/images/victory garden detail.jpg'
                alt='victory garden detail'
            />
            <Carousel.Caption>
                <h3>Victory Garden</h3>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </>
    )
}