// React Router
import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Signin from './pages/signin';
import ResetPass from './pages/resetpass';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },

  {
    path: '/home',
    element: <Home />,
  },

  {
    path: '/signin',
    element: <Signin />,
  },

  {
    path: '/reset',
    element: <ResetPass />,
  },
]);

export default router;
