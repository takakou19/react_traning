import React, {Component} from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

class App extends Component {
    render() {
        const props = this.props;

        // console.log("props:" + props);

        return (
            <React.Fragment>
                {console.dir(this.props)}
                <div>value:{ props.value }</div>
                <button onClick={props.decrement}>-1</button>
                <button onClick={props.increment}>+1</button>
                <button onClick={console.log(this.state)}>state表示</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ value : state.count.value });

// const mapDispatchToProps = dispatch => ({
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(App)

