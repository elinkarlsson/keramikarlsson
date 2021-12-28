import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Contact from './Contact/Contact';
import Item from './Item/Item';
import NotFound from './NotFound/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="container">
          <div className="main">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/shop/:category?">
                <Shop />
              </Route>
              <Route path="/item/:id">
                <Item />
              </Route>
              <Route path="/kontakt">
                <Contact />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
