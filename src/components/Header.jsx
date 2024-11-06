// Styles for Header
import Navigation from './Navigation';
import '../styles/Header.css';

// Renders Header Component
export default function Header() {
    return (
        <>
            <Navigation />
            <img className='cover-image' src='/images/rainbow drops.jpg' alt='abstract multi-colored droplets and swirls'></img>
        </>
    )
}  