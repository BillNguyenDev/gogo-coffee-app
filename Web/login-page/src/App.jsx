import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './features/Auth/page/login-page';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Redirect, Route, Switch } from 'react-router';
import DashboardPage from './features/Dashboard/page/DashboardPage';
import AuthGuard from './features/Auth/components/AuthGuard/AuthGuard';
import NotFound from './features/NotFound/NotFound';
import { APP_ROUTES } from './constants/app-route';

function App() {
  return (
    <>
      <Switch>
        <AuthGuard path={APP_ROUTES.LOGIN} component={LoginPage} exact />
        <AuthGuard path={APP_ROUTES.HOME} component={DashboardPage} exact />
        <Redirect from="/maindashboard" to="/" exact />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
