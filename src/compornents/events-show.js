import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from "redux-form";
import { Link } from 'react-router-dom'

import { deleteEvent, getEvent, putEvent } from '../actions';
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

class EventsShow extends Component {
    constructor(props) {
        // console.log("events-showのid:"+props.match.params.id)
        console.log("EventShowのconstructor")
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    componentDidMount() {
        console.log("EventShowのcomponentDidMount")
        const { id } = this.props.match.params
        if (id) this.props.getEvent(id)
    }

    renderField(Field){
        console.log("events.showのrenderField()")
        const { input, label, type, meta:{ touched, error }} = Field

        return (
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched && error && <span>{error}</span>}
            </div>
        )
    }

    async onDeleteClick(){
        const { id } = this.props.match.params
        // console.log( id )
        await this.props.deleteEvent(id)
        this.props.history.push("/")
    }
    async onSubmit(values){
        await this.props.putEvent(values)
        this.props.history.push('/')
    }


    render() {
        const { handleSubmit, pristine, submitting, invalid } = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div>
                    <div><Field label="Title" name='title' type='text' component={this.renderField}></Field></div>
                    <div><Field label="Body" name='body' type='text' component={this.renderField}></Field></div>

                    <div>
                        <input type="submit" value="submit" disabled={pristine || submitting || invalid}/>
                        <Link to="/">Cancel</Link>
                        <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
                    </div>

                </div>
            </form>
        )
    }
}

const validate = values =>{
    const errors = {}

    if(!values.title) errors.title = "titleを入力してください"
    if(!values.body) errors.body = "bodyを入力してください"

    return errors
}

const mapStateToProps = (state, ownProps) => {
    console.log("events-showのmapStateToProps")
    console.log(state)
    const event = state.events[ownProps.match.params.id]
    // console.log(ownProps.match.params.id)
    return { initialValues: event, state }
}

const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent })

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ validate, form:'eventShowForm', enableReinitialize: true })(EventsShow)
)
