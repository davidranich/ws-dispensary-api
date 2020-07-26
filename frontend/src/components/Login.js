import React, {Component} from "react";
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loginErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const {username, password} = this.state;
        const user = {username: username, password: password};
        axios.post("http://localhost:8888/user/login", {user}, {withCredentials: true}).then(res => {
            // if(res.data.status === "created"){
            //
            // }
            console.log('res from login', res);

        }).catch(error => {
            console.log('registration error', error);
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}