import './App.css';
import Layout from '../Layout/Layout'
import Form from '../Form/Form'
import EndGame from '../EndGame/EndGame'
import CardContainer from '../CardContainer/CardContainer'
import { Switch, Route, withRouter } from 'react-router-dom'
import { useSelector, useDispatch, connect } from 'react-redux'
import { resetCategory, resetError, resetFlashcards, resetUser } from '../../store/actions'

function App(props) {
  const error = useSelector((state) => state.error)
  const dispatch = useDispatch()

  const handleReturnClick = () => {
    dispatch(resetError())
    dispatch(resetCategory())
    dispatch(resetUser())
    props.history.push('/')
  }

  if (error !== '') {
    return (
      <Layout>
        <div className='error-view'>
          <h1>{error}</h1>
          <p>Please refresh the window or click the button below to try again.</p>
          <button onClick={handleReturnClick}>Return Home</button>
        </div>
      </Layout>
    )
  }

  return (
    <div className="app">
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

export default connect(null, null)(withRouter(App))
