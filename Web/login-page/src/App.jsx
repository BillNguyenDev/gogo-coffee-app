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

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={LoginPage} exact />
        <AuthGuard path="/" component={DashboardPage} exact />
        <Redirect from="/maindashboard" to="/" exact />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
