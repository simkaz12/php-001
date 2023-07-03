import './App.css';
import './buttons.scss';
import Animal from './components/004/Animal';
import AnimalItem from './components/004/AnimalItem';


const animals = [
    { id: 1, type: 'racoon', animalColor: 'skyblue'},
    { id: 2, type: 'cat', animalColor: 'red'},
    { id: 3, type: 'dog', animalColor: 'black'},
    { id: 4, type: 'fish', animalColor: 'white'},
    { id: 5, type: 'bird', animalColor: 'orange'},
    { id: 6, type: 'elephant', animalColor: 'grey'},
    { id: 7, type: 'monkey', animalColor: 'pink'},

]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Props</h1>
        <h2>{5 + 10}</h2>
       {
           animals.map(animal => <AnimalItem key={animal.id} animal={animal}/>)
        }
      </header>
    </div>
  );
}

export default App;
/*
<Animal type="Racoon" animalColor='skyblue' />
<Animal type="Cat" animalColor='crimson'/>
{
 animals.map(animal => <div key={animal.id} style={{color: animal.animalColor}}>{animal.type}</div>)
}*/