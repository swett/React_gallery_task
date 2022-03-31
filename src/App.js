import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import FeedPhotos from './components/FeedPhotos';
import MainPage from './components/MainPage';
import Photo from './components/Photo';


 {/*  */}


function App() {
  return (
    
    <div className="App">
      <Router>
      <Switch>
      <Route exact path='/' component={FeedPhotos}/>
     <Route exact path='/photo/:id' component={Photo}/>
      </Switch>
      </Router>
    </div>
    
  );
}



export default App;
