import { KEY } from '../../App';
import { useState, useEffect } from 'react';

export default function Minus({ setMinusData, minusData, setLastUpdate }) {


    const [name, setName] = useState('');
    const [last, setLast] = useState('');
    const [sum, setSum] = useState(0);
    const [amount, setAmount] = useState(0);
    const [persons, setPersons] = useState(null);


    useEffect(_ => {
        if (minusData) {
            setName(minusData.name)
            setLast(minusData.last)
            setSum(minusData.sum);
        }
    }, [minusData]);



    const minus = () => {

        const updatedPersons = persons.map((person) => {
            if (person.id === minusData.id) {
                const updatedMoney = person.sum - parseInt(amount);
                return {
                    ...person,
                    sum: updatedMoney >= 0 ? updatedMoney : 0,
                };
            }
            return person;
        });
        setPersons(updatedPersons);
        setMinusData(null);
        setAmount("");
        setLastUpdate(Date.now());

    };

    return (
        <div className="modal show">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit</h5>
                        <button type="button" className="btn-close" onClick={_ => setMinusData(null)}></button>
                    </div>
                    <div className="modal-body">
                        <fieldset>
                            <legend>Withdraw money to account</legend>
                            <div className="mt-3">
                                <input type="number" value={amount} onChange={(e) =>
                                    setAmount(e.target.value)} />
                            </div>



                        </fieldset>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="nice green small no" onClick={_ => setMinusData(null)}>Close</button>
                        <button type="button" className="nice red small no" onClick={minus}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )


}