import React, { Component } from 'react';

function withPersistentData(WrappedComponent) {
    return class extends Component {
        componentWillMount() {
            this.setState({data: 1});
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props}/>
        }
    }
}

class MyComponent extends Component {
    render() {
        return (
                <div>{this.props.data}</div>
        );
    }
}

const MyComponentWithPersistentData = withPersistentData(MyComponent);

export default MyComponent;