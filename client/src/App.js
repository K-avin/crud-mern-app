import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreateMovies from './pages/admin/CreateMovies';
import ListMovies from './pages/admin/ListMovies';
import GithubCommit from './pages/admin/githubCommit';
import EditMovies from './pages/admin/EditMovies';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cards from "./pages/Cards";

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
                {/* <Link to={'/git'} className="nav-link">
                    Git
                  </Link> */}
                  <Link to={'/list-movies'} className="nav-link">
                    Movies
                  </Link>
                  <Link to={'/create-movie'} className="nav-link">
                    Create
                  </Link>
                  <Link to={'/login'} className="nav-link">
                    Login
                  </Link>
                  <Link to={'/register'} className="nav-link">
                    Register
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
                      component={Cards}

                    />
                    <Route
                      exact
                      path="/register"
                      component={Register}
                    />
                    <Route
                      exact
                      path="/login"
                      component={Login}
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
                    <Route
                      exact
                      path="/git"
                      component={GithubCommit}
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
