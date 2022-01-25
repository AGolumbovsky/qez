import react from 'react'

export const Modal = (props) => {

    return (
        <div class="modal" >
            <div class="modal-content">{ props.description }</div>    
        </div>
    )

}