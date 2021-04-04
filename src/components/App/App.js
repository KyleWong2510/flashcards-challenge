import './App.css';
import Layout from '../Layout/Layout'
import Form from '../Form/Form'
import EndGame from '../EndGame/EndGame'
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
        <Route path='/end'>
          <Layout>
            <EndGame />
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
