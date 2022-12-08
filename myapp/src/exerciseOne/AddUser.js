import React, { Component } from 'react'

class AddUser extends Component {
    constructor(props) {
        super()
        this.state = {
            id: "",
            name: "",
            description: "",
            price: ""
        }
    }
    handleInput = (event) =>{
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        })
    }
    handleSubmit = (event) =>{

        event.preventDefault()
        this.props.addUsers(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='id'    onChange={this.handleInput}   placeholder='Enter Id ' />
                    <input type="text" name='name'     onChange={this.handleInput}   placeholder='Enter Name ' />
                    <input type="text" name='description'    onChange={this.handleInput}   placeholder='Enter Description' />
                    <input type="text" name='price'    onChange={this.handleInput}   placeholder='Enter Price'  />
                    <button type="submit"> Submit </button>
                </form>
            </div>
        )
    }
}


export default AddUser
