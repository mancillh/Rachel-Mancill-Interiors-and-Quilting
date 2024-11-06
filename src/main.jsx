// importing App into Main so functionality of navigation between pages works
import App from './App.jsx'
//Allows routing to different "pages"
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing page components
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import QuiltPortfolio from './pages/QuiltPortfolio.jsx';

// Defines the accessible routes and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
      path: 'about',
      element: <AboutPage />,
      },
      {
        path: 'portfolio',
        element: <QuiltPortfolio />,
      }
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
