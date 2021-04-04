import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

import MobileNavBar from './Components/NavBar/MobileNavBar';
import BrowserNavBar from './Components/NavBar/BrowserNavBar';
import FooterElement from './Components/FooterElement';

import { Home, About, Contact, MiniApps, MyWork } from './Components';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <MobileView>
          <MobileNavBar />
        </MobileView>
        <BrowserView>
          <BrowserNavBar />
        </BrowserView>
        <Switch>
          <Route path='/' exact component = {() => <Home />}></Route>
          <Route path='/about' exact component = {() => <About />}></Route>
          <Route path='/contact' exact component = {() => <Contact />}></Route>
          <Route path='/my-work' exact component = {() => <MyWork />}></Route>
          <Route path='/mini-apps' exact component = {() => <MiniApps />}></Route>
        </Switch>
        <FooterElement />
      </Router>
    </div>
  );
}

export default App;
