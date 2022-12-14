import React from "react"

class Home extends React.Component {
    render() {
        const redirectToLogin = () => {
            window.location.href = 'https://api.five-lions-e6156.com';
        }

        return (
            <div>
                <h1>Five Lions</h1>
                <button onClick={redirectToLogin}>Login</button>
            </div>
        );
    }
}

export default Home;
