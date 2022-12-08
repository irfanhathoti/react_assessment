import React, { Component } from 'react'

class UpdateUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.user.id,
            name: this.props.user.name,
            description: this.props.user.description,
            price:this.props.user.price
        }
    }
    handleInput = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {

        event.preventDefault()
        this.props.addUsers(this.state)
    }
    render() {
        console.log(this.state.id)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='id' onChange={this.handleInput} placeholder='Enter Id ' value={this.props.user.id} />
                    <input type="text" name='name' onChange={this.handleInput} placeholder='Enter Name ' value={this.props.user.name} />
                    <input type="text" name='description' onChange={this.handleInput} placeholder='Enter Description' value={this.props.user.description} />
                    <input type="text" name='price' onChange={this.handleInput} placeholder='Enter Price' value={this.props.user.price} />
                    <button type="submit"> Update </button>
                </form>
            </div>
        )
    }
}


export default UpdateUsers
