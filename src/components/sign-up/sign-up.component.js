import React from 'react';
import FormInput from '../form-input/form-input.component';
import  CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            displayName: '',
            password: '',
            confirmPassword: ''
        }   
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                email: '',
                displayName: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.log(error)
        }



        this.setState({email:"", password: ""})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value})
    }

    render() {
        return(
            <div className="sign-up">
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="displayName" 
                        type="text" 
                        handleChange={this.handleChange}
                        value={this.state.displayName} 
                        required
                        label="Email"
                    />
                    <FormInput 
                        name="email" 
                        type="email" 
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        required
                        label="Email"
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        handleChange={this.handleChange}
                        value={this.state.password} 
                        required
                        label="Password"
                    />
                     <FormInput 
                        name="confirmPassword" 
                        type="password" 
                        handleChange={this.handleChange}
                        value={this.state.confirmPassword} 
                        required
                        label="Confirm Password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit" >Sign Up</CustomButton>
                    </div>

                </form>
            </div>
        )
    }


}

export default SignUp;