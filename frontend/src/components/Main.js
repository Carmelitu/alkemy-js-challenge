import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
    <Fragment>
        <h1>Weekly Budget Administrator</h1>
        <div className="container">
            <Link to={'/new'} className="button button-primary add-movement">Add Movement</Link>
        </div>
     </Fragment>
    );
}
 
export default Main;