import React, { Component, Fragment } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import './animation.css';

class TransitionGroupApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleAddItem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        });
    }

    render() {
        return (
                <Fragment>
                    <TransitionGroup>
                        {this.state.list.map((item, index) => {
                            return (
                                    <CSSTransition key={index} timeout={500} classNames='fade'>
                                        <div key={index}>{item}</div>
                                    </CSSTransition>
                            )
                        })}
                    </TransitionGroup>

                    <button onClick={this.handleAddItem}>Add</button>
                </Fragment>
        );
    }
}

export default TransitionGroupApp;