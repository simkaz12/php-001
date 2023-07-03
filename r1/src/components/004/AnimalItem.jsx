import '../../style.scss'
import '../../functions/rand.js'

function AnimalItem({animal}) {
    
    const handleClick = _ => {
        console.log(animal.type);
    }
    
    
    
    
    return (
        <>
            <div className="box" style= {{color: animal.animalColor}}>
                <h2>{animal.type}<span>**</span></h2>
            </div>
            <button onClick={handleClick}>Click me!</button>
        </>
    )
}

export default AnimalItem;