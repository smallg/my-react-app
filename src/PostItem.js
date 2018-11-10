import React from 'react';
import PropTypes from 'prop-types';

function PostItem(props) {

    const handleClick = () => {
        props.onVote(props.post.id);
    };

    const {post} = props;

    return (
            <li>
                <div>{post.title}</div>
                <div>author: {post.author}</div>
                <div>date: {post.date}</div>
                <div>
                    <button onClick={handleClick}>Vote
                    </button>
                    <span>{post.vote}</span>
                </div>
            </li>
    );
}

PostItem.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
        date: PropTypes.string,
        vote: PropTypes.number
    }).isRequired,
    onVote: PropTypes.func.isRequired
};

PostItem.defaultProps = {
    title: 'test'
};

export default PostItem;