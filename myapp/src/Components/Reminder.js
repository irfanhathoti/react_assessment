import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux'

import { addReminder, deleteReminder, clearReminder } from '../Action/Action'
// import './Reminder.css'
import moment from 'moment';


class Reminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
         

        };
    }

    addreminder() {
        // console.log('this add',this)
        this.props.addReminder(this.state.text, this.state.dueDate);
    }
    deletereminder(id) {
        this.props.deleteReminder(id)

    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">

                                <div className='list-item'>
                                    <div>{reminder.text} </div>
                                  

                                </div>

                                <div onClick={() => this.deletereminder(reminder.id)}
                                    className='list-item delete-button'>
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        )

    }


    render() {
        console.log('this props', this.props);
        return (
            <>
                <div >

                    <div className="title">
                        Todo List
                    </div>
                    <div className="form-inline">
                        <div className='form-group'>
                            <input className='form-control'
                                placeholder='Task'
                                onChange={event => this.setState({ text: event.target.value })} />
                        </div>
                    </div>

                    <button className='btn btn-info'
                        onClick={() => this.addreminder()}>click</button>

                </div>
                {this.renderReminders()}
                <input type="button" className="btn btn-danger"
                    onClick={() => this.props.clearReminder()}
                    value="ClearAll"
                />


            </>
        );
    }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({addReminder},dispatch);
// }

function mapStateToProps(state) {
    // console.log('state',state);
    return {
        reminders: state
    }
}


export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminder })(Reminder);