import AccountPage from './pages/account-page/AccountPage';
import { LogIn } from './component/auth/log-in.component';
import { Register } from './component/auth/register.component';
import ChartPage from './pages/chart-page/ChartPage';
import Chat from './component/Chat-Page';
import Edit from './component/edit-page/edit.component';
import Home from './component/home-page/Home';
import LandingPage from './pages/landing-page/LandingPage';
import SimulationHistoryPage from './component/simulation-history-page';
import Simulation from './component/simulation-page/simulation.component';
import HelpPage from './pages/help-page/HelpPage';
export const router = [
  {
    name: 'introduction',
    path: '/',
    component: LandingPage,
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
  },
  {
    name: 'login',
    path: '/login',
    component: LogIn,
  },
  {
    name: 'register',
    path: '/register',
    component: Register,
  },
  {
    name: 'edit',
    path: '/edit',
    component: Edit,
  },
  {
    name: 'simulation',
    path: '/simulation/:id',
    component: Simulation,
  },
  {
    name: 'user',
    path: '/user',
    component: AccountPage,
  },
  {
    name: 'chart',
    path: '/chart',
    component: ChartPage,
  },
  {
    name: 'help',
    path: '/help',
    component: HelpPage,
  },

  {
    name: 'simulation',
    path: '/simulation/:id/history',
    component: SimulationHistoryPage,
  },
  {
    name: 'chat',
    path: '/chat',
    component: Chat,
  },
];
