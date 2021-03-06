import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './animation.css';

class CSSTransitionApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({
            show: this.state.show ? false : true
        });
    }

    render() {
        return (
                <Fragment>
                    <CSSTransition in={this.state.show}
                                   timeout={1000}
                                   classNames='fade'
                                   unmountOnExit
                                   onEntered={(el) => {
                                       el.style.color = 'red'
                                   }}
                                   appear={true}>
                        <div>hello</div>
                    </CSSTransition>
                    <button onClick={this.handleToggle}>toggle</button>
                </Fragment>
        );
    }
}

export default CSSTransitionApp;