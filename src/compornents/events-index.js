import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from  'lodash'
import { Link } from 'react-router-dom'

import { readEvents } from '../actions';

class EventsIndex extends Component {

    componentDidMount() {
        console.log("componentのcomponentDidMountの処理")
        this.props.readEvents()
    }
    // データの内容をtbodyに出力
    renderEvents(){
        // console.log("renderEvents")
        return _.map(this.props.events, event => (
            <tr key={event.id}>
                <td>
                    <Link to={`/events/${event.id}`}>
                        {event.id}
                    </Link>
                </td>
                <td>
                    <Link to={`/events/${event.id}`}>
                        {event.title}
                    </Link>
                </td>
                <td>{event.body}</td>
            </tr>
        ))
    }

    render() {
        return (
            <React.Fragment>
                {console.log("componentのrender処理")}
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderEvents()}
                    </tbody>
                </table>

                <Link to="/events/new">NewEvents</Link>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ events : state.events })

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
