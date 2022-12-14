import React, {ReactElement} from "react";
import Post from "./Post";

interface FeedProps {
    userId: string
}

interface PostJson {
    userId: string,
    imageId: string,
    postId: string,
    subject: string
}

type FeedState = {
    posts: Array<PostJson>,
    isLoading: boolean
}

class Feed extends React.Component<FeedProps> {
    constructor(props: FeedProps) {
        super(props);

        this.state = {
            posts: [],
            isLoading: true
        }

        this.getPosts = this.getPosts.bind(this)
        this.stateUpdate = this.stateUpdate.bind(this)
    }

    stateUpdate(fetched_posts: PostJson[]) {
        this.setState({
            posts: fetched_posts,
            isLoading: false
        })
    }

    getPosts(posts: Array<string>) {
        let post_url = 'https://api.five-lions-e6156.com/v1/post/';
        this.stateUpdate = this.stateUpdate.bind(this)

        Promise.all(posts.map(post => fetch(post_url + post).then(post => post.json())))
            .then(fetched_posts => this.stateUpdate(fetched_posts))
    }

    componentDidMount() {
        let feed_url = 'https://api.five-lions-e6156.com/v1/feed/' + this.props.userId;

        fetch(feed_url)
            .then(response => response.json())
            .then(this.getPosts)
    }

    createPostComponents(posts: PostJson[]) {
        let image_url = 'https://api.five-lions-e6156.com/v1/image/'

        return posts.map(post => {
            return <Post key={post.postId} userId={post.userId} subject={post.subject} url={image_url + post.imageId}/>
        })
    }

    render() {
        let {posts, isLoading} = this.state as FeedState

        if(isLoading) {
           return (<div></div>)
        }

        return (
            <div className="feed-elem">
                <h1>Feed</h1>
                <button onClick={(e) => window.location.href='/create?userId=' + this.props.userId}>Create Post</button>
                {this.createPostComponents(posts)}
            </div>
        )
    }
}

export default Feed;
