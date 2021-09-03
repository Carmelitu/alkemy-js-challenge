import React, {Fragment} from 'react';
import Form from './components/Form';
import Table from './components/Table';
import Title from './components/Title';

function App() {
  return (
    <Fragment>
      <div className="container">
        <Title/>
        <div class="row">
          <div class="one-half column">
            <h3>Enter new movement</h3>
            <Form />
          </div>

          <div class="one-half column">
            <h3>Summary</h3>
            <Table />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
