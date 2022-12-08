import React from 'react'

function ViewUser(props) {
    return (
        <div>
            <p>Id:
                {
                    props.user.id
                }
            </p>
            <p>Name :
                {
                    props.user.name
                }
            </p>
            <p> Description
                {
                    props.user.description
                }
            </p>
            <p>Price:
                {
                    props.user.price
                }
            </p>


        </div>
    )
}

export default ViewUser