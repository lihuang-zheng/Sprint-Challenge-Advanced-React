import React from "react";

//import cards to github user component
import WomanCard from "./WomanCard";

// import axios to grab data from api
import axios from "axios";

// import material ui for the github
import Container from "@material-ui/core/Container";

// class component structure
class GithubUser extends React.Component {
    //use state for constructor
    state = {
        players: [],
    };

    // componentDidMount to get the axios to get data from github api
    componentDidMount() {

        //woman data axios
        axios
            .get("http://localhost:5000/api/players")
            .then(res => {
                console.log(res);

                this.setState({
                    players: res.data
                });
            })
            .catch(err => console.log(err));
    }

    // render user and user's follower on the page.
    render() {
        return (
            <Container maxWidth="lg">
                <header className="Woman-header">
                    <h1>Woman World Cup</h1>
                </header>

                <main>
                    <WomanCard players={this.state.players} />
                </main>
            </Container>
        );
    }
}

export default GithubUser;