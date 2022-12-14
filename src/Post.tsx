import React from "react";
import './post.css';

interface PostProps {
    userId: string,
    subject: string,
    url: string
}

interface ProfileJson {
    firstName: string
    lastName: string
}

type PostState = {
    firstName: string
    lastName: string
    isLoading: boolean
}

class Post extends React.Component<PostProps> {

    constructor(props: PostProps) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            isLoading: true
        }

        this.stateUpdate = this.stateUpdate.bind(this)
    }

    stateUpdate(firstName: string, lastName: string) {
        this.setState({
            firstName: firstName,
            lastName: lastName,
            isLoading: false
        })
    }

    componentDidMount() {
        let profile_url = 'https://api.five-lions-e6156.com/userbyid?userId=' + this.props.userId

        fetch(profile_url)
            .then(response => response.json())
            .then(obj => obj as ProfileJson)
            .then(profile => this.stateUpdate(profile.firstName, profile.lastName))
    }

    render() {
        let {firstName, lastName, isLoading} = this.state as PostState

        if(isLoading) {
            return (
                <div></div>
            )
        }

        return (
            <div className="post-elem">
                <p><a href={'/profile?userId=' + this.props.userId}>{firstName + " " + lastName}</a> </p>
                <p><b>{this.props.subject}</b></p>
                <div className="image-elem">
                    <img src={this.props.url} alt={"unknown"}/>
                </div>
            </div>
        )
    }
}

export default Post;
