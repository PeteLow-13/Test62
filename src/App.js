import { Container } from 'react-bootstrap'

import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen"
import AboutScreen from "./screens/AboutScreen"
import LocationSelectScreen from "./screens/LocationSelectScreen"
import ContactScreen from './screens/ContactScreen'

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/locations' exact component={LocationSelectScreen} />
            <Route path='/about' exact component={AboutScreen} />
            <Route path='/contact' exact component={ContactScreen} />
          </Switch>
        </Router>
      </Container>
      
    </div>
  );
}

export default App;
