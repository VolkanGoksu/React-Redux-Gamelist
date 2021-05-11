import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './Screens/HomeScreen.js';
import CreateScreen from './Screens/CreateScreen.js';

function App() {
  return (
    <Router>
      <Route path = '/' component = {HomeScreen} exact />
      <Route path = '/create' component = {CreateScreen} />
    </Router>
  );
}

export default App;
