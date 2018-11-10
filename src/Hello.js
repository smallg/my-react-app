import React from 'react';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'React',
            display: true
        };
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick() {
        this.setState({
            display: false
        });
    }

    render() {
        return (
                <div onClick={this.handlerClick}>
                    {this.state.display ? <h1>Hello, {this.state.user}</h1> : null}
                </div>
        );
    }
}

export default Hello;