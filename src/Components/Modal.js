import react, { useRef } from 'react'
import { useEffect } from 'react'

export const Modal = (props) => {

    console.log("props is:", props)

    const modalEl = useRef(null)

    useEffect(() => {
        
        const listener = e => {
        
            if (!modalEl.current.contains(e.target)) props.closeModal()
                // console.log("something inside useEffect fn")
                // handle
            }


        document.addEventListener('click', listener)

        return () => { 
            document.removeEventListener('click', listener)
        }
        
    }, []); // Only re-run the effect if count changes


    console.log("modal Element is:", modalEl)  

    return (
        <div class="modal">
            <div class="modal-content" ref={ modalEl }>
                <div>The Question is: { props.shownQuestion }</div>
                <div>Correct Answer is: { props.correctAnswer }</div>    
            </div>
        </div>
    )

}  