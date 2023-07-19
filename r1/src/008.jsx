import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {
    const [users, setUsers] = useState(null);

    useEffect(_ => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>api</h1>
                <ul>
                    {
                        users ?
                            users.map(user => <li key={user.id}>{user.name}</li>)
                            :
                            <li>Loading...</li>
                    }
                </ul>
            </header>
        </div>
    );
}

export default App;