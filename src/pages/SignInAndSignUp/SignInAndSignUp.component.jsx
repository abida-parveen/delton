import React from 'react'
import './SignInAndSignUp.styles.scss'
import SignIn from '../../components/signin/SignIn.component.jsx'
import SignUp from '../../components/signup/SignUp.component'

const SignInAndSignUp = () => {
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp />
        </div>
    )
}
export default SignInAndSignUp