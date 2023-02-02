import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductInfo from './pages/ProductInfo';
import ShoppingCart from './pages/ShoppingCart';
import "./styles/globalConfig.css";

function App() {
  return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shoppingCart" component={ ShoppingCart } />
        <Route
              exact
              path="/productInfo/:id"
              render={ (props) => (<ProductInfo { ...props } id="" />) }
            />
        <Route path="" component={ NotFound } />
      </Switch>
  );
}

export default App;
