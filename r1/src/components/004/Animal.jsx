function Animal({type, animalColor}) {
    /*
   
    if (type === "Racoon") {
        
        return (
            <div>
                <p>Racoon</p>
            </div>
        )
        
    } else if (type === "Cat") {
        return (
            <div>
                <p>Cat</p>
            </div>
        )
        
    } else {
        return (
            <div>
                <p>Animal</p>
            </div>
        )
        
    }
    */

    return (
        <div>
            <h1 style=
            {
                {
                    color: animalColor,
                    fontFamily: 'monospace',
                    letterSpacing: '0.1em'
                }
            }>
                {
                type === 'Racoon' 
                ?
                'Racoon'
                :
                type === 'Cat'
                ?
                'Cat'
                :
                'Animal'
                }
            </h1>
        </div>
    )
}

export default Animal;