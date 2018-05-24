import News from './pages/News';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export const routes = [
  {
    name: 'Home',
    path: '/',
    isExact: true,
    component: Home
  },
  {
    name: 'News',
    path: '/news',
    isNavBar: true,
    component: News
  },
  {
    name: 'Profile',
    path: '/profile',
    isNavBar: true,
    isPrivate: true,
    component: Profile
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    name: 'NotFound',
    path: '*',
    component: NotFound
  }
];
