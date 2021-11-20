import React,{useEffect} from "react";
import { BrowserRouter as Router, Switch, Route,useHistory } from "react-router-dom";
import AllNature from "./components/AllNature";
import Header from "./components/Header/Header";
import ProductsByCategoryComponent from "./components/Products/ProductsByCategory";
import ProductInfo from "./components/Products/ProductInfo";

const AppRoutes = () => {
  const history = useHistory();
  useEffect(() => {
    return () => {
      // && history.location.pathname === "any specific path")
      if (history.action === "POP") {
        history.replace(history.location.pathname, /* the new state */);
      }
    };
  }, [history])
  return (
    <div>

    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={AllNature} />
        <Route
          exact
          path="/category/:catogories"
          component={ProductsByCategoryComponent}
          />
        <Route exact path="/:catogories/product/:id" component={ProductInfo} />
      </Switch>
    </Router>
 
    </div>
  );
};

export default AppRoutes;
