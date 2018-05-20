import News from './pages/News';
import Profile from './pages/Profile';
import Login from './pages/Login';

export const routes = [
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
    component: Profile
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  }
];
