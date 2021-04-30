import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/About" component={About}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
