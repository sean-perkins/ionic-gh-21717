import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../App';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    const auth = useAuth();

    return <Route
        {...rest}
        render={(routeProps) => {
            return auth?.user ? (
                children
            ) : (
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
