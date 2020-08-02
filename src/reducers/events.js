import _ from 'lodash'
import {
    CREATE_EVENT,
    READ_EVENTS,
    READ_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT
} from "../actions";


export default (events = {}, action) => {
    switch (action.type) {
        case CREATE_EVENT :
        case READ_EVENT :
        case UPDATE_EVENT :
            console.log("reducers/event.jsのdefault関数READ_EVENT")
            const data = action.response.data
            // {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
            return {...events, [data.id]: data }
        case READ_EVENTS :
            // console.log( _.mapKeys(action.response.data, 'id' ))
            return _.mapKeys( action.response.data, 'id' )
        case DELETE_EVENT:
            // console.log(action.id)
            delete events[action.id]
            return {...events}
        default:
            return events
    }
}