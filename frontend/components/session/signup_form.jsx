import React from "react";
                    
class SignupFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state).then(()=> this.props.history.push('/browse'))
    }

    render () {
        return (
            <section class="signup-form-wrapper">
                <form class="signup-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email:
                        <input
                            type="text"
                            id="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label htmlFor="password">Password:
                        <input
                            type="password"
                            id="password"
                            value={this.state.password}  
                            onChange={this.update('password')}
                        />
                    </label>

                    <input type="submit" value="Sign Up"/>
                </form>
            </section>
        );
    }
}
export default SignupFrom;