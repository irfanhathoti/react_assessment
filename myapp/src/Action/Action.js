import {ADD_REMINDER} from '../Constants';
import {DELETE_REMINDER} from '../Constants';
import {CLEAR_REMINDER} from '../Constants'

export const addReminder=(text,dueDate)=>{

    const action ={
        type:ADD_REMINDER,
        text,
        dueDate
    }
    // console.log('action ',action)
    return action;
}

export const deleteReminder=(id)=>{

    const action ={
        type:DELETE_REMINDER,
        id
    }
    console.log('delete action ',action)
    return action;
    
}




export const clearReminder=()=>{

return {
type:CLEAR_REMINDER
}
    
}


