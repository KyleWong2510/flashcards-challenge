import './App.css';
import Layout from '../Layout/Layout'
import Form from '../Form/Form'
import CardContainer from '../CardContainer/CardContainer'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Layout>
            <Form />
          </Layout>
        </Route>  
        <Route path='/play'>
          <Layout>
            <CardContainer />
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
