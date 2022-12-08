import React, { Component } from 'react'
import EmployeeService from '../ecerciseTwo/EmployeeService'

class viewEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }
//here iam getting the the id 
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Email_Id </label>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> User_Name </label>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label>  ID: </label>
                            <div> { this.state.employee.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default viewEmployee
