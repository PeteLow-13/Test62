import { Container } from 'react-bootstrap';

import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LocationScreen from './screens/LocationScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import LocationSelectScreen from './screens/LocationSelectScreen';

import PointNoPointScreen from './screens/PointNoPointScreen';
import KingstonScreen from './screens/KingstonScreen';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <main className='py-3'>
        <Container>
          <Route path='/about' exact component={AboutScreen} />
          <Route path='/contact' exact component={ContactScreen} />
          <Route path='/locations' component={LocationScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
    </Router>
    // <div className='App'>
    //   <Container fluid>
    //     <Router>
    //       <Navbar />
    //       <Switch>
    //         <Route path='/' exact component={HomeScreen} />
    //         <Route path='/locations' exact component={LocationSelectScreen} />
    //         <Route path='/about' exact component={AboutScreen} />
    //         <Route path='/contact' exact component={ContactScreen} />
    //         <Route path='/pnp' exact component={PointNoPointScreen} />
    //         <Route path='/kingston' exact component={KingstonScreen} />
    //       </Switch>
    //     </Router>
    //     {/* <Footer /> */}
    //   </Container>
    // </div>
  );
}

export default App;
