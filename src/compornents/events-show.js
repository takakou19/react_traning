import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from "redux-form";
import { Link } from 'react-router-dom'

import { deleteEvent } from '../actions';

class EventsShow extends Component {
    constructor(props) {
        console.log("events-showのid:"+props.match.params.id)
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    renderField(Field){
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
        // await this.props.postEvent(values)
        this.props.history.push('/')
    }


    render() {
        const { handleSubmit, pristine, submitting } = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div>
                    <div><Field label="Title" name='title' type='text' component={this.renderField}></Field></div>
                    <div><Field label="Body" name='body' type='text' component={this.renderField}></Field></div>

                    <div>
                        <input type="submit" value="submit" disabled={pristine || submitting}/>
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

const mapDispatchToProps = ({ deleteEvent })

export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form:'eventShowForm' })(EventsShow)
)
