import React, {useState} from 'react';
import { withRouter } from 'react-router';
import axiosClient from '../config/axios';
import Back from './Back';
import Error from './Error';

const EditForm = ({setConsult, history, mov}) => {

    // Create state as an object
    const [movement, setMovement] = useState(mov);

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
    const editMovement = e => {
        e.preventDefault();

        if(movement.concept === '' || movement.amount === '' || movement.date === '' || movement.type === ''){
            setError(true);
            return;
        } else {
            setError(false);
            axiosClient.put(`/movements/${movement.id}`, movement)
            .then(res => {
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
                <h4>Edit movement</h4>
                <Back />
                <form onSubmit={editMovement}>
                    <div className="row">
                        <div className="u-full-width">
                            <label htmlFor="concept-form">Concept</label>
                            <input className="u-full-width" type="text" placeholder="Shopping" id="concept-form"
                                onChange={refreshState}
                                name="concept"
                                value={movement.concept}
                            />
                        </div>
                    </div>
                    <div className="u-full-width">
                            <label htmlFor="date-form">Date</label>
                            <input className="u-full-width" type="date" id="date-form"
                                onChange={refreshState}
                                name="date"
                                value={movement.date}
                            />
                        </div>
                    <div className="row">
                        <div className="one-half column">
                            <label htmlFor="type-form">Type</label>
                            <select className="u-full-width" id="type-form" onChange={refreshState} name="type" disabled>
                                <option value="">{movement.type}</option>
                            </select>
                        </div>
                        <div className="one-half column">
                            <label htmlFor="amount-form">Amount</label>
                            <input className="u-full-width" type="number" placeholder="500" id="amount-form"
                                onChange={refreshState}
                                name="amount"
                                value={movement.amount}
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
 
export default withRouter(EditForm);