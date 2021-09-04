import React, {Fragment, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axiosClient from './config/axios';

// Comps
import Form from './components/Form';
import Table from './components/Table';
import Main from './components/Main';

function App() {

  // App State
  const [movements, setMovements] = useState([]);
  const [consult, setConsult] = useState(true);

  useEffect(() => {
    if (consult){
      const consultAPI = () => {
        axiosClient.get('/movements')
          .then(res => {
            setMovements(res.data);
            setConsult(false);
          })
          .catch(error => console.log(error))
      }
  
      consultAPI();
    }
  }, [consult]);

  return (
    <Router>
    <Switch>
      <Route
        exact path="/"
        component={ () => <Fragment>
          <Main />
          <Table
            movements={movements}
            setConsult={setConsult}
          />
        </Fragment>}
      />
      
      <Route
        exact path="/new"
        component={() => <Form setConsult={setConsult} />}
      />

      <Route
        exact path="/movement/:id"

        /*render={(props) => {
          const cita = citas.filter(cita => cita._id === props.match.params.id)
          console.log(cita);

          return (
          <Cita 
            cita={cita[0]}
            guardarConsulta={guardarConsulta}
          />)
        }}*/
      />
    </Switch>
  </Router>
  );
}

export default App;
