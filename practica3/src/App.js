import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import Reviewer from './components/Reviewer';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/About" component={About}/>
          <Route exact path="/reviewer/:id" component={Reviewer}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
