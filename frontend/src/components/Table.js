import React from 'react';

const Table = () => {
    return ( 
        <table class="u-full-width">
            <thead>
                <tr>
                    <th>Concept</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Food</td>
                    <td>260</td>
                    <td>02/09/2021</td>
                    <td>Expenditure</td>
                </tr>
                <tr>
                    <td>Daily Salary</td>
                    <td>300</td>
                    <td>02/09/2021</td>
                    <td>Income</td>
                </tr>
            </tbody>
        </table>
     );
}
 
export default Table;