import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreateMovies from './components/CreateMovies'
import ListMovies from './components/ListMovies'
import EditMovies from './components/EditMovies'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/'} className="nav-link">
                  mFlix
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/list-movies'} className="nav-link">
                    Movies
                  </Link>
                  <Link to={'/create-movie'} className="nav-link">
                    Create
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                  <Switch>
                    <Route
                      exact
                      path="/"
                      component={ListMovies}
                    />
                    <Route
                      exact
                      path="/create-movie"
                      component={CreateMovies}
                    />
                    <Route
                      exact
                      path="/edit-movie"
                      component={EditMovies}
                    />
                    <Route
                      exact
                      path="/list-movies"
                      component={ListMovies}
                    />
                  </Switch>
                </div>

              </Col>
            </Row>
          </Container>
        </header>
      </Router>
    </div>
  );
}

export default App;
