import React, {Fragment} from 'react';
import Title from './components/Title';

function App() {
  return (
    <Fragment>
      <Title/>
      <div class="row">
        <div class="one-half column">
          <h3>Enter new movement</h3>
        </div>

        <div class="one-half column">
          <h3>Resume:</h3>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
