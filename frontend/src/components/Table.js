import React from 'react';

const Table = ({movements}) => {

    if (movements.length === 0){
        return null;
    }

    return (
        <div className="container">
            <h3>Summary</h3>
            <table className="u-full-width">
                <thead>
                    <tr>
                        <th>Concept</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {movements.map(movement =>(
                        <tr key={movement.id}>
                            <td>{movement.concept}</td>
                            <td>{movement.amount}</td>
                            <td>{movement.date}</td>
                            <td>{movement.type}</td>
                            <td>
                                <button
                                    className="button-primary edit-button"
                                    type="button"
                                    onClick={ () => console.log('click editar')}
                                >
                                    Edit
                                </button>
                            </td>

                            <td>
                                <button
                                    className="delete-button"
                                    type="button"
                                    onClick={ () => console.log('click eliminar')}
                                >
                                    x
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default Table;