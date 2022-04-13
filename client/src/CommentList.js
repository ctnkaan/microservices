import React from 'react';

function CommentList({ comments }) {

    const renderedComments = comments.map(comment => {
        let content;

        if (comment.status === 'approved') {
            content = comment.content;
        }

        else if (comment.status === 'pending') {
            content = '<awaiting moderation>';
        }

        else if (comment.status === 'rejected') {
            content = "<rejected>";
        }

        return <li key={comment.id}>{content}</li>;
    });

    return (
        <ul>
            {renderedComments}
        </ul>
    )
}

export default CommentList