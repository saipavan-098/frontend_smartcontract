//import logo from './logo.svg';
//import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';

import Register from './pages/register';
import Product from './pages/product';
import Status from './pages/status';



function App() {
  return (
    <Router>
       <Navbar />
       <Switch>   
        <Route path = '/register' component ={Register} />
        <Route path='/product' component={Product} />
        <Route path='/status' component={Status} />
       </Switch>
    </Router>
  );
}

export default App;
