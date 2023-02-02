import { Route, Routes as RoutesWrapper} from "react-router-dom";
import { routes } from "./const";

const Routes = () => {
  return (
    <RoutesWrapper>
        {routes.map(({Component, path}) => 
        <Route 
            key={path} 
            path={path} 
            />)}
    </RoutesWrapper>
  )
}

export default Routes;