import react from 'react'

export const Modal = (props) => {

    console.log("props is:", props)

    return (
        <div class="modal" >
            <div class="modal-content" >
                <div>The Question is: { props.shownQuestion }</div>
                <div>Correct Answer is: { props.correctAnswer }</div>    
            </div>
        </div>
    )

}  