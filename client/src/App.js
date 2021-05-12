import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './Screens/HomeScreen.js';
import CreateScreen from './Screens/CreateScreen.js';
import UpdateScreen from './Screens/UpdateScreen.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import { Container } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/create' component={CreateScreen} />
        <Route path='/update/:id' component={UpdateScreen} />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
