import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
//import Welcome from '../components/Welcome';
//import welcome from '../components/welcome';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'admin',
            password: 'admin',
            user_name: '',
            user_password: '',
            name: 'Login Feature',
            value: '',
            button: 'Login',
            updateIndex: '',
            list:[]
        };
       this.handleLogin = this.onLogin.bind(this);
       this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
          [name]: value
        });
    }

    onLogin(event){
        let authUser = this.state.username;
        let authPass = this.state.password;

        if (authUser == this.state.user_name && authPass == this.state.password) {
            console.log('matched')
            this.props.history.push('/welcome'); 
        } else {
            console.log('not matched')
        }
        event.preventDefault();
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>{this.state.name}</h1>
                        <form onSubmit={this.handleLogin}>
                        <input 
                            type="text"
                            name= "user_name"
                            placeholder="enter user name"
                            onChange={this.handleChange}
                            />
                            <input 
                            type="password"
                            name="user_password"
                            placeholder="enter Password"
                            onChange={this.handleChange}
                            />
                            <input type="submit" value={this.state.button} />
                            </form>
                            <br/>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
};

const mapStateToProps = (state) =>
    ({
    });

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
