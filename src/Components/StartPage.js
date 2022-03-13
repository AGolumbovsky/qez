import React, { useState } from 'react'
import { StartButton } from './StartButton'
import { Navbar } from './Navbar'

export function StartPage () {

    const [state, setState] = useState("level-one")

    const handleTestSelection = (event) => {

        setState(event.currentTarget.value)
    }

    return (

        <div>

            <select onChange={ handleTestSelection }>

                <option value="level-one">uno</option>
                <option value="level-two">dos</option>

            </select>
            
            <StartButton level={ state } />
        </div>
    )
}
