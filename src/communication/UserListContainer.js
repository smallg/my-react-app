import React, { Component } from 'react';
import UserList from "./UserList";

class UserListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.handleAddUser = this.handleAddUser.bind(this);
    }

    componentDidMount() {
        this.setState({
            users: [
                {id: 1, name: 'test1'},
                {id: 2, name: 'test2'},
                {id: 3, name: 'test3'},
                {id: 4, name: 'test4'},
            ]
        });
    }

    handleAddUser(user) {
        console.log(user)
        this.setState((prevState) => ({
            users: prevState.users.concat([{id: 5, name: 'test5'}])
        }));
    }


    render() {
        return (
                <UserList users={this.state.users} onAddUser={this.handleAddUser}/>
        );
    }
}

export default UserListContainer;