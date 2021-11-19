import HomePage from "pages/HomePage";
import Login from "pages/Login";
import RegisterPage from "pages/RegisterPage";
import { Route, Switch } from "react-router";
import "./App.css";

function App() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={RegisterPage} />
        </Switch>
    );
}

export default App;
