import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from "./PostList";
import Hello from './Hello';
import Time from "./Time";
import UserListContainer from "./communication/UserListContainer";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'test time'
        };
        this.updateTitle = this.updateTitle.bind(this);
    }

    updateTitle() {
        this.setState({
            title: 'smallg time'
        })
    }

    render() {
        return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a className="App-link"
                           href="https://reactjs.org"
                           target="_blank"
                           rel="noopener noreferrer">
                            Learn React
                        </a>
                    </header>
                    <div className="List">
                        <PostList/>
                    </div>
                    <div className="hello">
                        <Hello/>
                    </div>
                    <div className="Time" onClick={this.updateTitle}>
                        <Time title={this.state.title}/>
                        <Time title={'test2 time'}/>
                    </div>
                    <div className="communication">
                        <UserListContainer/>
                    </div>
                </div>
        );
    }
}

export default App;
