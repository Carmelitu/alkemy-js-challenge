import React, {useState} from 'react';
import { withRouter } from 'react-router';
import axiosClient from '../config/axios';
import Error from './Error';

const Form = ({setConsult, history}) => {
    // Create state as an object
    const [movement, setMovement] = useState({
        concept: '',
        amount: '',
        date: '',
        type: ''
    })

    // Verify error
    const [error, setError] = useState(false);

    // Form Read
    const refreshState = e => {
        setMovement({
            ...movement,
            [e.target.name]: e.target.value
        })
    }

    // Send req to API
    const createMovement = e => {
        e.preventDefault();

        if(movement.concept === '' || movement.amount === '' || movement.date === '' || movement.type === ''){
            setError(true);
            return;
        } else {
            setError(false);
            axiosClient.post('/movements', movement)
            .then(res => {
                console.log(res.data);

                setConsult(true);

                 // Redirect
                 history.push('/');
            })
            .catch(error => console.error(error))
        }
    }

    return (
        <div className="container">
            <div className="form">
                <h4>Enter new movement</h4>
                <form onSubmit={createMovement}>
                    <div className="row">
                        <div className="u-full-width">
                            <label htmlFor="concept-form">Concept</label>
                            <input className="u-full-width" type="text" placeholder="Shopping" id="concept-form"
                                onChange={refreshState}
                                name="concept"
                            />
                        </div>
                    </div>
                    <div className="u-full-width">
                            <label htmlFor="date-form">Date</label>
                            <input className="u-full-width" type="date" id="date-form"
                                onChange={refreshState}
                                name="date"
                            />
                        </div>
                    <div className="row">
                        <div className="one-half column">
                            <label htmlFor="type-form">Type</label>
                            <select className="u-full-width" id="type-form" onChange={refreshState} name="type">
                                <option value="">- Select an option -</option>
                                <option value="income">Income</option>
                                <option value="expenditure">Expenditure</option>
                            </select>
                        </div>
                        <div className="one-half column">
                            <label htmlFor="amount-form">Amount</label>
                            <input className="u-full-width" type="number" placeholder="500" id="amount-form"
                                onChange={refreshState}
                                name="amount"
                            />
                        </div>
                    </div>
                    <input className="button-primary u-full-width" type="submit" value="Submit"/>
                </form>
                {error ? <Error message="All fields are required" /> : null}
            </div>
        </div>
    );
}
 
export default withRouter(Form);