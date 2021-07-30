import React from 'react';
import './Css/App.css';
import Home from './Components/Home';
import Logement from './Components/Logement'
import NotFound from './Components/404'
import About from './Components/About'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      logements: [],
    }

  }

  componentDidMount() {
    (async () => {
      const response = await fetch('/logements.json');
      const logements = await response.json();

      if (response.ok) {
        this.setState(s => ({ ...s, logements: logements }));
      }
    })()
  }

  render() {

    return (
      <Router>
        <div className="app">
          <header className="navbar">
            <h1>
              <img src="/Images/LOGO.svg" alt="Kasa" />
            </h1>
            <nav>
              <NavLink exact to="/" activeClassName="current">Accueil</NavLink>
              <NavLink to="/about" activeClassName="current">A Propos</NavLink>
            </nav>
          </header>
          <Switch>
            <Route exact path="/"
              render={() =>
                <Home logements={this.state.logements} />
              }
            />

            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/logement/:id" children={({ match }) => {

              if (this.state.logements.length !== 0) {

                const validLogement = this.state.logements.find(logement => match.params.id === logement.id)

                return validLogement !== undefined
                  ?
                  <Logement match={match} logement={validLogement} />
                  :
                  <NotFound />
              }

              return null;
            }
            } />
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    )
  }

}

export default App;
