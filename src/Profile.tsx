import React from 'react'

interface ProfileProps {
    userId: string
}

type ProfileState = {
    firstName: string
    lastName: string
    isLoading: boolean
}

interface ProfileJson {
    firstName: string
    lastName: string
}

class Profile extends React.Component<ProfileProps> {

    constructor(props: ProfileProps) {
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
        let {firstName, lastName, isLoading} = this.state as ProfileState

        if(isLoading) {
            return (
                <div></div>
            );
        }

        return (
            <div className="profile-elem">
                <h1>{firstName} {lastName}</h1>
                <button>Follow {firstName}</button>
            </div>
        )
    }
}

export default Profile;
