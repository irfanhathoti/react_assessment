import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddUser from './AddUser';
import UpdateUsers from './UpdateUsers';
import ViewUser from './ViewUser';

class UserList extends Component {
    constructor() {
        super()
        this.state = {
            users: [{
                "id": 1,
                "name": "Irfan",
                "description": "Sleeping well is importanat",
                "price": "200Rs"
            },
            {
                "id": 2,
                "name": "Imran",
                "description": " Give Respect Take Reaspect ",
                "price": "145Rs"
            },
            {
                "id": 3,
                "name": "Anand",
                "description": " Practice More Make Perfect ",
                "price": "300Rs"
            },

            ],
            user: {},
            view: {}
        }
    }
    handleDelete = (index) => {
        let newState = this.state.users.filter((value, ind) => {
            return ind !== index
        })
        this.setState({
            users: newState
        })
    }


    addUsers = (user) => {
        let newState = [...this.state.users, user]
        this.setState({
            users: newState
        })

    }

    editUsers = (index) => {
        let edit = this.state.users.slice(index, index + 1)

        let newState = this.state.users.filter((value, ind) => {
            return ind !== index
        })

        this.setState({
            user: edit[0], users: newState
        })
        console.log(edit[0])

    }
    handleView = (index) => {
        let viewUser = this.state.users.slice(index, index + 1)

        this.setState({
            view: viewUser[0]
        })
        console.log(viewUser[0])
    }


    render() {
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.users.map((CurEle, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {
                                                    CurEle.id
                                                }
                                            </TableCell>
                                            <TableCell align="right">
                                                {
                                                    CurEle.name
                                                }
                                            </TableCell>
                                            <TableCell align="right">
                                                {
                                                    CurEle.description
                                                }
                                            </TableCell>
                                            <TableCell align="right">
                                                {
                                                    CurEle.price
                                                }
                                            </TableCell>
                                            <TableCell align="right">
                                                <button onClick={() => this.handleView(index)} className='btn btn-primary'>View</button>
                                                <button onClick={() => this.editUsers(index)} className='btn btn-warning'>Edit</button>
                                                <button onClick={() => this.handleDelete(index)} className='btn btn-danger'>Delete</button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <AddUser addUsers={this.addUsers} />
                <UpdateUsers addUsers={this.addUsers} user = {this.state.user} />
                <ViewUser user = {this.state.view} />

            </div>
        )
    }
}
export default UserList
