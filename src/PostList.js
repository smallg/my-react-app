import React, { Component } from 'react';
import PostItem from "./PostItem";
import axios from 'axios';

class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.timer = null;
        this.handleVote = this.handleVote.bind(this);
    }

    componentDidMount() {
        axios.get('/list').then((res) => {

        }).catch((err) => {
            console.log(err)
        });
        this.timer = setTimeout(() => {
            this.setState({
                posts: [
                    {id: 1, title: 'title-1', author: 'test1', date: '2017-08-11', vote: 0},
                    {id: 2, title: 'title-2', author: 'test2', date: '2017-08-12', vote: 0},
                    {id: 3, title: 'title-3', author: 'test3', date: '2017-08-14', vote: 0},
                ]
            });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    handleVote(id) {
        const posts = this.state.posts.map(item => {
            return item.id === id ? {...item, vote: ++item.vote} : item;
        });
        this.setState({
            posts
        });
    }

    render() {
        return (
                <div>
                    List:
                    <ul>
                        {this.state.posts.map(item =>
                                <PostItem key={item.id} post={item} onVote={this.handleVote}/>
                        )}
                    </ul>
                </div>
        );
    }
}

export default PostList;