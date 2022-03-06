import { useRef } from 'react'
import { useEffect } from 'react'

export const Modal = ({ closeModal, shownQuestion, correctAnswer }) => {
    const modalEl = useRef(null)

    useEffect(() => {
        
        const listener = e => {
        
            if (!modalEl.current.contains(e.target))  closeModal()
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
                <div>The Question is: { shownQuestion }</div>
                <div>Correct Answer is: { correctAnswer }</div>    
            </div>
        </div>
    )
}  