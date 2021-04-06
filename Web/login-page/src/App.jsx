import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './features/Auth/page/login-page';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Redirect, Route, Switch } from 'react-router';
import DashboardPage from './features/Dashboard/page/DashboardPage';

function App() {
  return (
    <>
      <Switch>
        <Redirect from="/login" to="/" exact />
        <Route path="/" exact component={LoginPage} />
        <Route path="/maindashboard" exact component={DashboardPage} />
      </Switch>
    </>
  );
}

export default App;
