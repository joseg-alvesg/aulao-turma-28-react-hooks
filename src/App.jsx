import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import AppProvider from './contexts/AppProvider';
import Home from './pages/Home';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/home" component={ Home } />
        </Switch>
      </div>
    </AppProvider>
  );
}

export default App;
