import './App.scss';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { get, store, update } from './functions/localStorage';
import './App.scss';
import './buttons.scss';
import Delete from './components/007/Delete';

export const KEY = 'persons';

function App() {

    const [name, setName] = useState('');
    const [last, setLast] = useState('');
    const [sum, setSum] = useState(0);
    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [persons, setPersons] = useState(null);

    const [deleteData, setDeleteData] = useState(null);
    const





    const plus = _ => {
        update(KEY, editData.id, {
            name,
            last,
            sum
        });
        setEditData(null);
        setLastUpdate(Date.now());
    };
    const minus = _ => {
        update(KEY, editData.id, {
            name,
            last,
            sum
        });
        setEditData(null);
        setLastUpdate(Date.now());
    };
    useEffect(_ => {
        if (editData) {
            setSum(editData.sum);
        }
    }, [editData]);

    useEffect(_ => {
        setPersons(get(KEY));
    }, [lastUpdate]);

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleLastChange = e => {
        setLast(e.target.value);
    }

    const handleCreate = _ => {
        const person = {
            name,
            last,
            sum
        }
        store(KEY, person);
        setName('');
        setLast('');
        setLastUpdate(Date.now());
    }

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <div className='sq-bin left'><div className="card">
                        <h1 className="card-header">Existing Accounts</h1>
                        <div className="card-body">
                            <fieldset>
                                <thead>
                                    <tr>
                                        <th width="20%">Name</th>
                                        <th width="20%">Last Name</th>
                                        <th width="20%">Balance</th>
                                        <th width="25%"></th>
                                        <th width="5%"></th>
                                        <th width="5%"></th>
                                        <th width="5%"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {persons && persons.map(person => (
                                        <tr key={person.id}>
                                            <td>{person.name}</td>
                                            <td>{person.last}</td>
                                            <td>{person.sum}</td>
                                            <td><input type="number" className='num' /></td>
                                            <td><button className="nice green small edit" >-</button></td>
                                            <td><button className="nice green small edit" >+</button></td>
                                            <td><button className="btn-close small no" aria-label="Close" style={{ marginTop: '12px' }} onClick={() => setDeleteData(person)}></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </fieldset>
                        </div>
                    </div></div>
                    <div className='sq-bin right'><div className="card">
                        <h1 className="card-header">New Account Creation</h1>
                        <div className="card-body">
                            <fieldset>
                                <legend>Vardas</legend>
                                <div className="mt-3">
                                    <input type="text" value={name} onChange={handleNameChange} />
                                </div>
                                <legend>Pavarde</legend>
                                <div className="mt-3">
                                    <input type="text" value={last} onChange={handleLastChange} />
                                </div>
                                <div className="mt-3">
                                    <button className="nice red" onClick={handleCreate}>Create</button>
                                </div>
                            </fieldset>
                        </div>
                    </div></div>
                </header>
            </div>
            {deleteData && <Delete setDeleteData={setDeleteData} deleteData={deleteData} setLastUpdate={setLastUpdate} />}
        </>
    );
}

export default App;