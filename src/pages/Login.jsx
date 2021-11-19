import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <p>
                or <Link to="/register">Register</Link>
            </p>
        </div>
    );
};

export default Login;
