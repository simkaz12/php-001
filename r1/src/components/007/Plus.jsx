import { KEY } from '../../App';
import { useState, useEffect } from 'react';

export default function Plus({ setPlusData, plusData, setLastUpdate }) {

    const [name, setName] = useState('');
    const [last, setLast] = useState('');
    const [sum, setSum] = useState(0);
    const [persons, setPersons] = useState(null);
    const [amount, setAmount] = useState(0);


    useEffect(_ => {
        if (plusData) {
            setName(plusData.name)
            setLast(plusData.last)
            setSum(plusData.sum);
        }
    }, [plusData]);

    // need to add amount to sum
    const add = () => {
        const updatedPersons = ((person) => {
            if (person.id === plusData.id) {
                return {
                    ...person,
                    sum: person.sum + parseInt(amount)
                };
            }
            return person;
        });
        setPersons(updatedPersons);
        setPlusData(null);
        setAmount("");
        setLastUpdate(Date.now());
    };




    return (
        <div className="modal show">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add</h5>
                        <button type="button" className="btn-close" onClick={_ => setPlusData(null)}></button>
                    </div>
                    <div className="modal-body">
                        <fieldset>
                            <legend>Add money to account</legend>
                            <div className="mt-3">
                                <input type="number" value={amount} onChange={(e) =>
                                    setAmount(e.target.value)} />
                            </div>
                        </fieldset>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="nice green small no" onClick={_ => setPlusData(null)}>Close</button>
                        <button type="button" className="nice red small no" onClick={add}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )


}