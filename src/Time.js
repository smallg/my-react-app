import React, { Component, Fragment } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            date: new Date()
        };
        this.updateDate = this.updateDate.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(this.updateDate, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.title !== this.props.title) {
            console.log('x')
        }
    }

    componentWillUpdate(nextProps, nextState, nextContent) {
        // console.log('componentWillUpdate', nextProps)
    }

    updateDate() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
                <Fragment>
                    <h1>Time: {this.props.title}</h1>
                    <h1>{this.state.date.toString()}</h1>
                    <div dangerouslySetInnerHTML={{__html: this.props.title}}></div>
                </Fragment>
        )
    }
}

export default Time;