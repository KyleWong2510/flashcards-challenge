import './App.css';
import Layout from '../Layout/Layout'
import Form from '../Form/Form'
import CardContainer from '../CardContainer/CardContainer'

function App() {
  return (
    <div className="App">
      <Layout>
        <Form />
      </Layout>
      {/* <Layout>
        <CardContainer />
      </Layout> */}
    </div>
  );
}

export default App;
