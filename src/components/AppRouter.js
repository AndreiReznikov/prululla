import { observer } from "mobx-react-lite";
import { Redirect, Route, Switch } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { HOME_ROUTE } from "../utils/consts";

const AppRouter = observer(() => {
    const isAuth = false;

    return (
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={HOME_ROUTE}/>
        </Switch>
    );
});

export default AppRouter;