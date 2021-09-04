import React from 'react';

const Form = () => {
    return (
        <div className="container">
            <div className="form">
                <h4>Enter new movement</h4>
                <form>
                    <div className="row">
                        <div className="u-full-width">
                            <label htmlFor="concept-form">Concept</label>
                            <input className="u-full-width" type="text" placeholder="Shopping" id="concept-form" />
                        </div>
                    </div>
                    <div className="u-full-width">
                            <label htmlFor="amount-form">Date</label>
                            <input className="u-full-width" type="date" id="amount-form"/>
                        </div>
                    <div className="row">
                        <div className="one-half column">
                            <label htmlFor="type-form">Type</label>
                            <select className="u-full-width" id="type-form">
                                <option value="">- Select an option -</option>
                                <option value="income">Income</option>
                                <option value="expenditure">Expenditure</option>
                            </select>
                        </div>
                        <div className="one-half column">
                            <label htmlFor="amount-form">Amount</label>
                            <input className="u-full-width" type="number" placeholder="500" id="amount-form"/>
                        </div>
                    </div>
                    <input className="button-primary u-full-width" type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
}
 
export default Form;