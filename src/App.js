import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ShoppingCart from './components/ShoppingCart';
import "./styles/globalConfig.css";

function App() {
  return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shoppingCart" component={ ShoppingCart } />
        <Route path="" component={ NotFound } />
      </Switch>
  );
}

export default App;
