import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import FormInput from '../form-input/form-input.component';

import { AUTH, SIGNINWITHGOOGLE } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await AUTH.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.error(error);
        }
        
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState( { [name]: value });
    
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label='email'
                        required 
                    />
                    
                    <FormInput 
                        name="password" 
                        value={this.state.password} 
                        required
                        label='password'
                        handleChange={this.handleChange}
                    />
                    
                    <div className="buttons">


                        <CustomButton type="submit" > SIGN IN </CustomButton>
                        <CustomButton type="button" onClick={SIGNINWITHGOOGLE} isGoogleSignin> {' '} Sign in with Google{' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    } 
}

export default SignIn;