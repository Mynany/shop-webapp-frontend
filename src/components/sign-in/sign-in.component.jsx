import React from 'react'

import './sign-in.style.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.util.js'

class Signin extends React.Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }
    handleChange = event => {
        const{value, name} = event.target;
        this.setState({[name]: value}); 
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email</span>

                <form onSubmit={this.handleSubmit}>
                    {/* <label>Email</label> */}
                    <FormInput name="email" label="Email" type="email" value={this.state.email} onChange={this.handleChange} required></FormInput>
                    {/* <label>Password</label> */}
                    <FormInput name="password" label="Password" type="password" value={this.state.password} onChange={this.handleChange} required />
                    <div className="sign-in-button-group">
                        <CustomButton type="submit" onClick={this.handleSubmit}>SIGN IN</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>

                    </div>

                </form>
            </div>
        )
    }

}

export default Signin;