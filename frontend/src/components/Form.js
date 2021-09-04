import React from 'react';

const Form = () => {
    return (
      <div className="container">
        <div class="row">
        <div class="u-full-width">
            <h4>Enter new movement</h4>
                <form>
                    <div className="row">
                        <div className="u-full-width">
                            <label for="concept-form">Concept</label>
                            <input className="u-full-width" type="text" placeholder="Shopping" id="concept-form" />
                        </div>
                    </div>
                    <div className="u-full-width">
                            <label for="amount-form">Date</label>
                            <input className="u-full-width" type="date" id="amount-form"/>
                        </div>
                    <div className="row">
                        <div className="one-half column">
                            <label for="type-form">Type</label>
                            <select class="u-full-width" id="type-form">
                                <option value="">- Select an option -</option>
                                <option value="income">Income</option>
                                <option value="expenditure">Expenditure</option>
                            </select>
                        </div>
                        <div className="one-half column">
                            <label for="amount-form">Amount</label>
                            <input className="u-full-width" type="number" placeholder="500" id="amount-form"/>
                        </div>
                    </div>
                    <input className="button-primary u-full-width" type="submit" value="Submit"/>
                </form>
            </div>
            </div>
        </div>
    );
}
 
export default Form;