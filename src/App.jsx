import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Custom Styles
import './styles/App.css'
import { Outlet } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
