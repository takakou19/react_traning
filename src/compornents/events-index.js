import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from  'lodash'

import { readEvents } from '../actions';

class EventsIndex extends Component {

    componentDidMount() {
        console.log("componentのcomponentDidMountの処理")
        this.props.readEvents()
    }
    // データのないようを
    renderEvents(){
        console.log("renderEvents")
        return _.map(this.props.events, event => (
            <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
            </tr>
        ))
    }

    render() {
        // const props = this.props;

        return (
            <React.Fragment>
                {console.log("componentのrender処理")}
                {/*<div>{console.log(props.events)}</div>*/}
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
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ events : state.events })

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
