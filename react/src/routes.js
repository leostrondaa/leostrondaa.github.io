// React Router
import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Signin from './pages/signin';
import ResetPass from './pages/resetpass';
import Configs from './pages/configs';

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
  {
    path: '/configs',
    element: <Configs />,
  },
]);

export default router;
