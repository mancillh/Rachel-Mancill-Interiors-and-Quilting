// Component Imports
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from "./components/Header";

// Bootstrap Styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Custom Styles
import './styles/App.css'

export default function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
