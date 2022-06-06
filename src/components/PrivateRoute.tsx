import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../App';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    const auth = useAuth();

    // This code works but fails for some scenarios.
    // You would not be able to see the login page
    // even if you are in the /login path
    return <Route
        {...rest}
        render={(routeProps) => {
            return auth?.user ? (
                children
            ) : (
                routeProps.location.pathname === '/login'
                    ?
                    null
                    :
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: routeProps.location }
                        }}
                    />
            )
        }}
    />
}

export default PrivateRoute
