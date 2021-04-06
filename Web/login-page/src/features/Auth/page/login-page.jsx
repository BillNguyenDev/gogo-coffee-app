import { Route, Switch, useRouteMatch } from "react-router";
import LoginComp from "../components/login-comp/LoginComp";
import "./login-page.scss";
const LoginPage = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${match.url}`} component={LoginComp} />
      </Switch>
    </>
  )
};
export default LoginPage;
