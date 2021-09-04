import React, {Fragment, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axiosClient from './config/axios';

// Comps
import Form from './components/Form';
import Table from './components/Table';
import Title from './components/Title';

function App() {
  return (
    <Router>
    <Switch>
      <Route
        exact path="/"
        component={ () => <Fragment>
          <Title/>
          <Table />
        </Fragment>}
      />
      
      <Route
        exact path="/new"
        component={() => <Form />}
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
