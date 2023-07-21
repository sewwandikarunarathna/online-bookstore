
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Book from './Book';
import Home from './Home' ;
import Booklist from './Booklist';
import Signup from './signup';
import BookParams from './BookParams';

//import Login from './login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Router>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/booklist' Component={Booklist} />
        {/* <Route exact path='/viewdetails/:name' Component={Book} /> */}
        <Route exact path='/viewdetails/:name' Component={BookParams} />
        <Route exact path='/signup' Component={Signup} />
      </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
