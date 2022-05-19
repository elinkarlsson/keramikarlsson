import './App.css'
import {
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Contact from './Contact/Contact';
import Item from './Item/Item';
import NotFound from './NotFound/NotFound';
import { UserProvider } from './Store/Contexts';
import Checkout from './Checkout/Checkout';

export default function App() {
  return (
    <HashRouter>
      <UserProvider>

        <div className="app">
          <Header />
          <div className="container container-main">
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
                <Route path="/varukorg">
                  <Checkout />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </UserProvider>
    </HashRouter>
  )
}
