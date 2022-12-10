import React from "react";
import './post.css';

interface PostProps {
    name: string,
    subject: string,
    url: string
}

class Post extends React.Component<PostProps> {
    render() {
        return (
            <div className="post-elem">
                <p><b>{this.props.subject}</b></p>
                <div className="image-elem">
                    <img src={this.props.url} alt={"unknown"}/>
                </div>
            </div>
        )
    }
}

export default Post;
