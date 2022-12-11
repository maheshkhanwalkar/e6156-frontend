import React, {ChangeEvent} from "react";

interface CreatePostProps {
    userId: string
}

interface CreatePostState {
    file: File | null,
    subject: string
}

class CreatePost extends React.Component<CreatePostProps> {
    state: CreatePostState

    constructor(props: any) {
        super(props);

        this.state = {
            file: null,
            subject: ''
        }
    }

    render() {
        const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
            if(e.target.files) {
                this.setState({
                    file: e.target.files[0]
                })
            }
        }

        const handleSubjectChange = (e: ChangeEvent<HTMLInputElement>) => {
            console.log('called!')

            if(e.target.value) {
                console.log(e.target.value)

                this.setState({
                    subject: e.target.value
                })
            }
        }

        const createPostAction = () => {
            let post_url =
                'https://api.five-lions-e6156.com/v1/post/?userId=' + this.props.userId +
                    '&subject=' + this.state.subject;

            if(this.state.file === null) {
                console.log('nothing to upload!')
                return
            }

            const data = new FormData()
            data.append('image', this.state.file)

            fetch(post_url, {
                method: 'POST',
                body: data
            }).then((res) => res.json())
                .then((data) => console.log(data))
        }

        return (
            <div className="create-post-elem">
                <h1>Create new post</h1>
                Subject: <input type="text" id="subject-input" onChange={handleSubjectChange}/>
                <input type="file" onChange={handleFileSelect} />
                <br/>
                <br/>
                <button onClick={createPostAction}>Create</button>
            </div>
        )
    }
}

export default CreatePost;
