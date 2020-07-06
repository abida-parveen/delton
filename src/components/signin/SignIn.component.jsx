import React from 'react'
import './SignIn.styles.scss'
import FormInput from '../formInput/FormInput.component.jsx'
import CustomButton from '../customButton/CustomButton.component.jsx'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

class SignIn extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state;

        try
        {
            await auth.signInWithEmailAndPassword(email, password);
            //console.log(email,password)
            this.setState({email:'',password:''})
        }
        catch(error)
        {
            console.log(error,'im in signin component');
            
        }
    }

    handleChange = event => {
        const { value , name } = event.target;
        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span className='title'>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required 
                    />
                    <div className='buttons'>

                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignin>
                            Sign In With Google
                        </CustomButton>

                    </div>
                   
                </form>

            </div>
        )
    }
}
export default SignIn