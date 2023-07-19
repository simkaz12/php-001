import { useState, useEffect } from 'react';
import './App2.scss';
import './buttons.scss';
import { get, store } from './functions/localStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Delete from './components/007/Delete';
import Plus from './components/007/Plus';
import Minus from './components/007/Minus';



export const KEY = 'persons';

function App() {

    const [name, setName] = useState('');
    const [last, setLast] = useState('');
    const [sum, setSum] = useState(0);
    const [persons, setPersons] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const [deleteData, setDeleteData] = useState(null);
    const [funds, setFunds] = useState("");
    const [selected, setSelected] = useState(null);


    const handleCreate = _ => {
        const person = {
            name,
            last,
            sum
        }
        store(KEY, person);
        setName('');
        setLast('');
        setSum(0);
        setLastUpdate(Date.now());
    }


    useEffect(() => {
        if (persons) {
            const sortedPersons = persons.slice().sort((a, b) => {
                const lastNameA = a.last.toLowerCase();
                const lastNameB = b.last.toLowerCase();
                return lastNameA.localeCompare(lastNameB);
            });
            setPersons(sortedPersons);
        }
    }, [persons]);

    useEffect(_ => {
        setPersons(get(KEY));
    }, [lastUpdate]);



    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleLastChange = e => {
        setLast(e.target.value);
    }


    const addFunds = () => {
        if (selected && funds) {
            const updatedPersons = persons.map((person) => {
                if (person.id === selected.id) {
                    return { ...person, money: person.money + parseInt(funds) };
                }
                return person;
            });
            setPersons(updatedPersons);
            setSelected(null);
            setFunds("");
        }
    };

    const subtractFunds = () => {
        if (selected && funds) {
            const updatedPersons = persons.map((person) => {
                if (person.id === selected.id) {
                    const updatedMoney = person.money - parseInt(funds);
                    return {
                        ...person,
                        money: updatedMoney >= 0 ? updatedMoney : 0,
                    };
                }
                return person;
            });
            setPersons(updatedPersons);
            setSelected(null);
            setFunds("");
        }
    };



    return (
        <>
            <div className='deze'>
                <div className='virsus'>
                    <h1>Create new Account</h1>
                    <p>Name: <br /><input type="text" value={name} onChange={handleNameChange} /></p>
                    <p>Last Name: <br /><input type="text" value={last} onChange={handleLastChange} /></p>
                    <button className='nice green small' onClick={handleCreate}>Create</button>
                </div>
                <div className='apacia'>
                    <h2>Accounts</h2>
                    <fieldset>
                        <thead>
                            <tr>
                                <th width="20%">Name</th>
                                <th width="20%">Last Name</th>
                                <th width="20%">Balance</th>
                                <th width="5%"></th>
                                <th width="5%"></th>
                                <th width="5%"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {persons &&
                                persons.map((person) => (
                                    <tr key={person.id}>
                                        <td>{person.name}</td>
                                        <td>{person.lastName}</td>
                                        <td>{person.sum}</td>
                                        <td>
                                            {selected &&
                                                selected.id === person.id ? (
                                                <div>
                                                    <input
                                                        type="number"
                                                        value={funds}
                                                        onChange={(e) =>
                                                            setFunds(e.target.value)
                                                        }
                                                        placeholder="Enter funds amount"
                                                    />
                                                </div>
                                            ) : null}
                                        </td>
                                        <td>
                                            {selected &&
                                                selected.id === person.id ? (
                                                <>
                                                    <button className="nice green small edit" onClick={addFunds}>Confirm</button>
                                                    <button className="nice green small edit" onClick={subtractFunds}>
                                                        Subtract
                                                    </button>
                                                </>
                                            ) : (
                                                <button className="nice green small edit" onClick={() => setSelected(person)}>
                                                    Edit
                                                </button>
                                            )}
                                        </td>
                                        <td>
                                            <button className="nice red small edit" onClick={(_) => setDeleteData(person)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </fieldset>
                </div>
            </div>
            {deleteData && <Delete setDeleteData={setDeleteData} deleteData={deleteData} setLastUpdate={setLastUpdate} />}

        </>
    );
}

export default App;